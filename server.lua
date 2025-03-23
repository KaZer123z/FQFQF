-- Server side for vehicle customization
-- Framework: ESX
-- Version: 1.1.0

ESX = exports.es_extended:getSharedObject()

-- Callback pour gérer le paiement des modifications
ESX.RegisterServerCallback('custom:payModifications', function(source, cb, price)
    local xPlayer = ESX.GetPlayerFromId(source)

    if xPlayer.getMoney() >= price then
        xPlayer.removeMoney(price)
        TriggerClientEvent('esx:showNotification', source, 'Vous avez payé $' .. price)
        cb(true)
    else
        TriggerClientEvent('esx:showNotification', source, 'Vous n\'avez pas assez d\'argent')
        cb(false)
    end
end)

-- Callback pour vérifier l'argent de l'entreprise (pour les véhicules de service)
ESX.RegisterServerCallback('Custom:CheckEnterpriseMoney', function(source, cb, plate, props, price)
    local xPlayer = ESX.GetPlayerFromId(source)
    local job = xPlayer.job.name
    
    MySQL.Async.fetchAll('SELECT * FROM owned_vehicles WHERE plate = @plate', {
        ['@plate'] = plate
    }, function(result)
        if result[1] then
            if result[1].job == job then
                -- Véhicule de service, vérifier les fonds de l'entreprise
                TriggerEvent('esx_addonaccount:getSharedAccount', 'society_' .. job, function(account)
                    if account.money >= price then
                        account.removeMoney(price)
                        
                        MySQL.Async.execute('UPDATE owned_vehicles SET vehicle = @vehicle WHERE plate = @plate', {
                            ['@plate'] = plate,
                            ['@vehicle'] = json.encode(props)
                        })
                        
                        TriggerClientEvent('esx:showNotification', source, 'Modifications appliquées: $' .. price .. ' (Société)')
                        cb(true)
                    else
                        TriggerClientEvent('esx:showNotification', source, 'La société n\'a pas assez d\'argent')
                        cb(false)
                    end
                end)
            else
                -- Véhicule personnel, payer avec l'argent du joueur
                if xPlayer.getMoney() >= price then
                    xPlayer.removeMoney(price)
                    
                    MySQL.Async.execute('UPDATE owned_vehicles SET vehicle = @vehicle WHERE plate = @plate', {
                        ['@plate'] = plate,
                        ['@vehicle'] = json.encode(props)
                    })
                    
                    TriggerClientEvent('esx:showNotification', source, 'Modifications appliquées: $' .. price)
                    cb(true)
                else
                    TriggerClientEvent('esx:showNotification', source, 'Vous n\'avez pas assez d\'argent')
                    cb(false)
                end
            end
        else
            -- Véhicule non enregistré, payer avec l'argent du joueur
            if xPlayer.getMoney() >= price then
                xPlayer.removeMoney(price)
                TriggerClientEvent('esx:showNotification', source, 'Modifications appliquées: $' .. price)
                cb(true)
            else
                TriggerClientEvent('esx:showNotification', source, 'Vous n\'avez pas assez d\'argent')
                cb(false)
            end
        end
    end)
end)

-- Événement pour sauvegarder les modifications du véhicule dans la base de données
RegisterServerEvent('persistent-vehicles/update-vehicle')
AddEventHandler('persistent-vehicles/update-vehicle', function(plate, props)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    
    MySQL.Async.execute('UPDATE owned_vehicles SET vehicle = @vehicle WHERE plate = @plate', {
        ['@plate'] = plate,
        ['@vehicle'] = json.encode(props)
    }, function(rowsChanged)
        if rowsChanged > 0 then
            TriggerClientEvent('esx:showNotification', _source, 'Véhicule mis à jour')
        end
    end)
    
    -- Synchroniser les modifications pour tous les joueurs
    TriggerClientEvent('custom:syncVehicle', -1, NetworkGetNetworkIdFromEntity(GetVehiclePedIsIn(GetPlayerPed(_source), false)), props)
end)

-- Événement pour enregistrer un véhicule
RegisterServerEvent('persistent-vehicles/server/register-vehicle')
AddEventHandler('persistent-vehicles/server/register-vehicle', function(netId, props)
    local _source = source
    local vehicle = NetworkGetEntityFromNetworkId(netId)
    
    if DoesEntityExist(vehicle) then
        -- Synchroniser les modifications pour tous les joueurs
        TriggerClientEvent('custom:syncVehicle', -1, netId, props)
    end
end)

-- Événement pour synchroniser les modifications entre tous les joueurs
RegisterServerEvent('custom:syncVehicle')
AddEventHandler('custom:syncVehicle', function(netId, props)
    TriggerClientEvent('custom:syncVehicle', -1, netId, props)
end)