-- Module de customisation de véhicules pour FiveM (GTA RP)
-- Framework: ESX
-- Version améliorée avec nouvelles fonctionnalités de couleur et néons

ESX = exports.es_extended:getSharedObject()

-- Initialisation des variables
local currentVehicle = nil
local isInCustomShop = false
local originalVehicleProperties = nil
local currentVehicleProperties = nil
local cam = nil
local originalPrice = 0
local currentPrice = 0
local currentCategory = "performance"
local menuOpen = false

-- Tables des catégories et prix
local performanceCategories = {
    engine = {name = "Amélioration moteur", maxLevel = 4, prices = {1000, 3500, 7000, 10000}},
    brakes = {name = "Amélioration freins", maxLevel = 3, prices = {1000, 3000, 5000}},
    transmission = {name = "Amélioration transmission", maxLevel = 3, prices = {1000, 3000, 5000}},
    suspension = {name = "Amélioration suspension", maxLevel = 4, prices = {1000, 2500, 5000, 7500}},
    turbo = {name = "Turbo", maxLevel = 1, prices = {8000}},
    armor = {name = "Armure", maxLevel = 5, prices = {1000, 3000, 5000, 7000, 9000}}
}

local exteriorCategories = {
    spoiler = {name = "Aileron", modType = 0, maxLevel = 0, prices = {}},
    frontBumper = {name = "Pare-choc avant", modType = 1, maxLevel = 0, prices = {}},
    rearBumper = {name = "Pare-choc arrière", modType = 2, maxLevel = 0, prices = {}},
    sideSkirt = {name = "Bas de caisse", modType = 3, maxLevel = 0, prices = {}},
    exhaust = {name = "Échappement", modType = 4, maxLevel = 0, prices = {}},
    frame = {name = "Cage", modType = 5, maxLevel = 0, prices = {}},
    grille = {name = "Grille", modType = 6, maxLevel = 0, prices = {}},
    hood = {name = "Capot", modType = 7, maxLevel = 0, prices = {}},
    fender = {name = "Aile gauche", modType = 8, maxLevel = 0, prices = {}},
    rightFender = {name = "Aile droite", modType = 9, maxLevel = 0, prices = {}},
    roof = {name = "Toit", modType = 10, maxLevel = 0, prices = {}},
    horn = {name = "Klaxon", modType = 14, maxLevel = 0, prices = {}},
    vanityPlate = {name = "Plaque avant", modType = 26, maxLevel = 0, prices = {}}
}

local interiorCategories = {
    trim = {name = "Style intérieur", modType = 27, maxLevel = 0, prices = {}},
    ornaments = {name = "Figurine", modType = 28, maxLevel = 0, prices = {}},
    dashboard = {name = "Tableau de bord", modType = 29, maxLevel = 0, prices = {}},
    dial = {name = "Compteur de vitesse", modType = 30, maxLevel = 0, prices = {}},
    doorSpeaker = {name = "Haut-parleur de porte", modType = 31, maxLevel = 0, prices = {}},
    seats = {name = "Sièges", modType = 32, maxLevel = 0, prices = {}},
    steeringWheel = {name = "Volant", modType = 33, maxLevel = 0, prices = {}},
    shifterLeavers = {name = "Levier", modType = 34, maxLevel = 0, prices = {}},
    plaques = {name = "Logo personnalisé", modType = 35, maxLevel = 0, prices = {}},
    speakers = {name = "Haut-parleurs", modType = 36, maxLevel = 0, prices = {}},
    trunk = {name = "Coffre", modType = 37, maxLevel = 0, prices = {}}
}

local colorCategories = {
    primary = {name = "Couleur primaire", prices = {1000}},
    secondary = {name = "Couleur secondaire", prices = {800}},
    pearlescent = {name = "Couleur nacrée", prices = {1200}},
    interior = {name = "Couleur intérieure", prices = {500}},
    dashboard = {name = "Couleur tableau de bord", prices = {500}}
}

local wheelCategories = {
    wheelType = {
        name = "Type de roues",
        types = {
            {id = 0, name = "Sport", price = 1000},
            {id = 1, name = "Muscle", price = 1000},
            {id = 2, name = "Lowrider", price = 1200},
            {id = 3, name = "SUV", price = 1000},
            {id = 4, name = "Offroad", price = 1200},
            {id = 5, name = "Tuner", price = 1500},
            {id = 6, name = "Bike", price = 800},
            {id = 7, name = "High End", price = 1800}
        }
    },
    frontWheel = {name = "Roues avant", modType = 23, maxLevel = 0, prices = {}},
    backWheel = {name = "Roues arrière", modType = 24, maxLevel = 0, prices = {}},
    wheelColor = {name = "Couleur des jantes", prices = {300}}
}

-- Nouvelles catégories
local paintTypeCategories = {
    primary = {name = "Type de peinture primaire", prices = {500, 700, 1000, 900, 1200, 1500}},
    secondary = {name = "Type de peinture secondaire", prices = {500, 700, 1000, 900, 1200, 1500}}
}

local neonCategories = {
    neons = {name = "Néons", prices = {3000}},
    neonColor = {name = "Couleur des néons", prices = {1000}}
}

local xenonCategories = {
    xenon = {name = "Phares Xenon", prices = {1500}},
    xenonColor = {name = "Couleur des xenons", prices = {1000}}
}

-- Couleurs de fumée des roues
local wheelSmokeColors = {
    [1] = { 255, 255, 255 },   -- Blanc
    [2] = { 244, 65, 65 },     -- Rouge
    [3] = { 244, 167, 66 },    -- Orange
    [4] = { 244, 217, 65 },    -- Jaune
    [5] = { 158, 255, 84 },    -- Vert clair
    [6] = { 44, 94, 5 },       -- Vert foncé
    [7] = { 65, 211, 244 },    -- Bleu clair
    [8] = { 24, 54, 163 },     -- Bleu foncé
    [9] = { 108, 24, 192 },    -- Violet
    [10] = { 192, 24, 172 },   -- Rose
    [11] = { 1, 1, 1 }         -- Noir
}

local windowTints = {
    {id = -1, name = "Stock", price = 0, active = false},
    {id = 0, name = "Aucune", price = 100, active = false},
    {id = 1, name = "Pure Black", price = 500, active = false},
    {id = 2, name = "Dark Smoke", price = 400, active = false},
    {id = 3, name = "Light Smoke", price = 300, active = false},
    {id = 4, name = "Limo", price = 600, active = false},
    {id = 5, name = "Green", price = 300, active = false}
}

-- Coordonnées des customs shops dans le monde
local customShops = {
    {pos = vector3(-333.64, -137.27, 38.57), heading = 161.42},
    {pos = vector3(-1155.53, -2007.18, 13.18), heading = 342.5},
    {pos = vector3(731.81, -1088.82, 22.17), heading = 270.11},
    {pos = vector3(1175.04, 2640.22, 37.75), heading = 1.5},
    {pos = vector3(110.54, 6626.66, 31.79), heading = 224.18}
}

-- Couleurs prédéfinies pour les véhicules
local vehicleColors = {}
for i = 0, 159 do
    table.insert(vehicleColors, i)
end

-- Vérifier si le joueur est proche d'un custom shop
Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        if not isInCustomShop then
            local playerPed = PlayerPedId()
            if IsPedInAnyVehicle(playerPed, false) then
                local playerPos = GetEntityCoords(playerPed)
                for i, shop in pairs(customShops) do
                    local distance = #(playerPos - shop.pos)
                    if distance < 10.0 then
                        if GetPedInVehicleSeat(GetVehiclePedIsIn(playerPed, false), -1) == playerPed then
                            ESX.ShowHelpNotification("Appuyez sur ~INPUT_CONTEXT~ pour accéder au custom shop")
                            if IsControlJustReleased(0, 38) then
                                EnterCustomShop(shop.heading)
                            end
                        end
                    end
                end
            end
        end
        
        -- Si dans le custom shop, désactiver la touche pour sortir du véhicule
        if isInCustomShop then
            DisableControlAction(0, 75, true)  -- Désactiver la touche F
            DisableControlAction(27, 75, true) -- Désactiver la sortie du véhicule
        end
    end
end)

-- Création des blips sur la carte
Citizen.CreateThread(function()
    for i, shop in pairs(customShops) do
        local blip = AddBlipForCoord(shop.pos)
        SetBlipSprite(blip, 72)
        SetBlipColour(blip, 0)
        SetBlipScale(blip, 0.8)
        SetBlipAsShortRange(blip, true)
        BeginTextCommandSetBlipName('STRING')
        AddTextComponentString('LS Customs')
        EndTextCommandSetBlipName(blip)
    end
end)

-- Fonction pour initialiser toutes les catégories
function InitializeCategories()
    -- Définir obligatoirement le ModKit avant d'accéder aux mods
    SetVehicleModKit(currentVehicle, 0)
    
    -- Debug: Afficher des informations du véhicule pour le débogage
    
    -- Initialiser les prix des catégories extérieur
    for category, data in pairs(exteriorCategories) do
        local modType = data.modType
        -- Important: définir ModKit pour chaque vérification
        SetVehicleModKit(currentVehicle, 0)
        local maxMods = GetNumVehicleMods(currentVehicle, modType)
        
        -- Debug: Afficher le nombre maximum de mods pour cette catégorie
        
        data.maxLevel = maxMods
        
        -- Générer les prix en fonction du nombre de mods
        data.prices = {}
        for i = 1, maxMods do
            table.insert(data.prices, 500 + (i * 150))
        end
        
        -- Initialiser le niveau actuel correctement (tenir compte des véhicules sans mods)
        data.current = maxMods > 0 and (GetVehicleMod(currentVehicle, modType) + 1) or 0
    end
    
    -- Initialiser les prix des catégories intérieur
    for category, data in pairs(interiorCategories) do
        local modType = data.modType
        -- Important: définir ModKit pour chaque vérification
        SetVehicleModKit(currentVehicle, 0)
        local maxMods = GetNumVehicleMods(currentVehicle, modType)
        
        -- Debug: Afficher le nombre maximum de mods pour cette catégorie
        
        data.maxLevel = maxMods
        
        -- Générer les prix en fonction du nombre de mods
        data.prices = {}
        for i = 1, maxMods do
            table.insert(data.prices, 300 + (i * 100))
        end
        
        -- Initialiser le niveau actuel correctement (tenir compte des véhicules sans mods)
        data.current = maxMods > 0 and (GetVehicleMod(currentVehicle, modType) + 1) or 0
    end
    
    -- Initialiser les prix des roues
    for category, data in pairs(wheelCategories) do
        if category ~= "wheelType" and category ~= "wheelColor" then
            local modType = data.modType
            -- Important: définir ModKit pour chaque vérification
            SetVehicleModKit(currentVehicle, 0)
            local maxMods = GetNumVehicleMods(currentVehicle, modType)
            
            -- Debug: Afficher le nombre maximum de mods pour cette catégorie
            
            data.maxLevel = maxMods
            
            -- Générer les prix en fonction du nombre de mods
            data.prices = {}
            for i = 1, maxMods do
                table.insert(data.prices, 200 + (i * 120))
            end
            
            -- Initialiser le niveau actuel correctement (tenir compte des véhicules sans mods)
            data.current = maxMods > 0 and (GetVehicleMod(currentVehicle, modType) + 1) or 0
        end
    end
    
    -- Initialiser les niveaux actuels pour les performances
    -- Important: définir ModKit pour chaque vérification
    SetVehicleModKit(currentVehicle, 0)
    performanceCategories.engine.current = GetVehicleMod(currentVehicle, 11) + 1
    performanceCategories.brakes.current = GetVehicleMod(currentVehicle, 12) + 1
    performanceCategories.transmission.current = GetVehicleMod(currentVehicle, 13) + 1
    performanceCategories.suspension.current = GetVehicleMod(currentVehicle, 15) + 1
    performanceCategories.turbo.current = IsToggleModOn(currentVehicle, 18) and 1 or 0
    performanceCategories.armor.current = GetVehicleMod(currentVehicle, 16) + 1
    
    -- Initialiser les néons
    local isNeonEnabled = false
    local neonPositions = {false, false, false, false}
    
    for i = 0, 3 do
        neonPositions[i+1] = IsVehicleNeonLightEnabled(currentVehicle, i)
        if neonPositions[i+1] then
            isNeonEnabled = true
        end
    end
    
    -- Initialiser les types de peinture (si disponible)
    local paintType = GetVehicleModColor_1(currentVehicle)
    
    -- Initialiser la teinte de vitre active
    local currentTint = GetVehicleWindowTint(currentVehicle)
    for i, tint in ipairs(windowTints) do
        tint.active = (tint.id == currentTint)
    end
    
    -- Debug: Afficher les niveaux de performance initialisé
end

-- Fonction pour obtenir l'index de mod correspondant à la catégorie
function GetModIndex(category)
    if category == "engine" then return 11
    elseif category == "brakes" then return 12
    elseif category == "transmission" then return 13
    elseif category == "suspension" then return 15
    elseif category == "turbo" then return 18
    elseif category == "armor" then return 16
    elseif category == "windowTint" then return nil -- Cas spécial traité séparément
    elseif category == "wheelType" then return nil -- Cas spécial traité séparément
    elseif category == "wheelColor" then return nil -- Cas spécial traité séparément
    elseif category == "primaryColor" then return nil -- Cas spécial traité séparément
    elseif category == "secondaryColor" then return nil -- Cas spécial traité séparément
    elseif category == "pearlColor" then return nil -- Cas spécial traité séparément
    elseif category == "smoke" then return 20
    elseif category == "smokeColor" then return nil -- Cas spécial traité séparément
    elseif category == "xenon" then return 22
    elseif category == "xenonColor" then return nil -- Cas spécial traité séparément
    elseif category == "paintType" then return nil -- Cas spécial traité séparément
    elseif category == "neons" then return nil -- Cas spécial traité séparément
    elseif category == "neonColor" then return nil -- Cas spécial traité séparément
    elseif category == "neonPosition" then return nil -- Cas spécial traité séparément
    elseif category == "horn" then return 14
    elseif category == "livery" then return 48
    elseif category == "spoiler" then return 0
    elseif category == "frontBumper" then return 1
    elseif category == "rearBumper" then return 2
    elseif category == "sideSkirt" then return 3
    elseif category == "exhaust" then return 4
    elseif category == "frame" then return 5
    elseif category == "grille" then return 6
    elseif category == "hood" then return 7
    elseif category == "fender" then return 8
    elseif category == "rightFender" then return 9
    elseif category == "roof" then return 10
    elseif category == "vanityPlate" then return 26
    elseif category == "trim" then return 27
    elseif category == "ornaments" then return 28
    elseif category == "dashboard" then return 29
    elseif category == "dial" then return 30
    elseif category == "doorSpeaker" then return 31
    elseif category == "seats" then return 32
    elseif category == "steeringWheel" then return 33
    elseif category == "shifterLeavers" then return 34
    elseif category == "plaques" then return 35
    elseif category == "speakers" then return 36
    elseif category == "trunk" then return 37
    elseif category == "frontWheel" then return 23
    elseif category == "backWheel" then return 24
    end
    return nil
end


-- Fonction d'entrée du custom shop
function EnterCustomShop(heading)
    isInCustomShop = true
    
    -- Récupère le véhicule actuel
    local playerPed = PlayerPedId()
    currentVehicle = GetVehiclePedIsIn(playerPed, false)
    
    -- ⚠️ IMPORTANT: Définir le ModKit AVANT d'accéder aux mods
    SetVehicleModKit(currentVehicle, 0)
    
    -- Sauvegarde les propriétés originales du véhicule
    originalVehicleProperties = ESX.Game.GetVehicleProperties(currentVehicle)
    currentVehicleProperties = ESX.Game.GetVehicleProperties(currentVehicle)
    
    -- Initialise les prix des catégories
    InitializeCategories()
    
    -- Freeze le véhicule à la position du shop
    local vehiclePos = GetEntityCoords(currentVehicle)
    SetEntityCoords(currentVehicle, vehiclePos.x, vehiclePos.y, vehiclePos.z)
    SetEntityHeading(currentVehicle, heading)
    FreezeEntityPosition(currentVehicle, true)
    SetVehicleEngineOn(currentVehicle, false, true, false)
    
    -- Crée une caméra
   -- CreateCustomCam()
    
    -- Ouvre l'interface UI
    OpenCustomUI()
    
    -- Désactive tous les contrôles sauf pour l'UI
    CreateThread(function()
        while isInCustomShop do
            DisableControlAction(2, 288, true)
            DisableControlAction(2, 289, true)
            DisableControlAction(2, 170, true)
            DisableControlAction(2, 167, true)
            DisableControlAction(2, 168, true)
            DisableControlAction(2, 23, true)
            DisableControlAction(0, 75, true) -- Désactiver la touche F (sortie du véhicule)
            DisableControlAction(27, 75, true) -- Désactiver la sortie du véhicule
            Wait(0)
        end
    end)
    
    -- Affiche l'interface
    menuOpen = true
end

function ExitCustomShop(apply)
    if apply then
        -- Applique les modifications et facture le joueur
        local price = currentPrice
        if price > 0 then
            ESX.TriggerServerCallback('custom:payModifications', function(paid)
                if paid then
                    -- Sauvegarde les modifications sur le véhicule
                    ESX.Game.SetVehicleProperties(currentVehicle, currentVehicleProperties)
                    
                    -- Enregistrer le véhicule modifié dans la base de données persistante
                    local plate = GetVehicleNumberPlateText(currentVehicle)
                    TriggerServerEvent('persistent-vehicles/update-vehicle', plate, currentVehicleProperties)
                    
                    ESX.ShowNotification("Modifications appliquées. Facturé: $" .. price)
                else
                    -- Réinitialise le véhicule à son état original
                    ESX.Game.SetVehicleProperties(currentVehicle, originalVehicleProperties)
                    ESX.ShowNotification("Paiement refusé. Modifications annulées.")
                end
                CleanupCustomShop()
            end, price)
        else
            CleanupCustomShop()
        end
    else
        -- Annule les modifications et restaure le véhicule à son état original
        ESX.Game.SetVehicleProperties(currentVehicle, originalVehicleProperties)
        ESX.ShowNotification("Modifications annulées")
        CleanupCustomShop()
    end
end

function CleanupCustomShop()
    -- Supprime la caméra et réactive les contrôles
    DeleteCustomCam()
    
    -- Ferme l'interface UI
    CloseCustomUI()
    
    -- Défreeze le véhicule
    FreezeEntityPosition(currentVehicle, false)
    SetVehicleEngineOn(currentVehicle, true, false, false)
    
    -- Réinitialise les variables
    isInCustomShop = false
    menuOpen = false
    currentVehicle = nil
    originalVehicleProperties = nil
    currentVehicleProperties = nil
    originalPrice = 0
    currentPrice = 0
    
    -- Réactive les contrôles
    EnableAllControlActions(0)
end

-- Fonctions de caméra
function CreateCustomCam()
    local coords = GetEntityCoords(currentVehicle)
    cam = CreateCam("DEFAULT_SCRIPTED_CAMERA", true)
    SetCamCoord(cam, coords.x - 2.0, coords.y + 1.0, coords.z + 0.5)
    SetCamRot(cam, 0.0, 0.0, 250.0, 2)
    RenderScriptCams(true, false, 0, true, true)
    SetCamActive(cam, true)
end

function DeleteCustomCam()
    if cam ~= nil then
        RenderScriptCams(false, false, 0, true, true)
        DestroyCam(cam, true)
        cam = nil
    end
end


function OpenCustomUI()
    -- Ouvre l'UI NUI
    SetNuiFocus(true, true)
    
    -- Préparation des données du véhicule pour l'interface
    local vehicleData = {
        -- Performances
        engineLevel = performanceCategories.engine.current,
        brakesLevel = performanceCategories.brakes.current,
        transmissionLevel = performanceCategories.transmission.current,
        suspensionLevel = performanceCategories.suspension.current,
        armorLevel = performanceCategories.armor.current,
        turboEnabled = performanceCategories.turbo.current,
        
        -- Mods spéciaux
        xenonEnabled = IsToggleModOn(currentVehicle, 22) and 1 or 0,
        smokeEnabled = IsToggleModOn(currentVehicle, 20) and 1 or 0,
        
        -- Néons
        neonsEnabled = IsVehicleNeonLightEnabled(currentVehicle, 0) or 
                      IsVehicleNeonLightEnabled(currentVehicle, 1) or 
                      IsVehicleNeonLightEnabled(currentVehicle, 2) or 
                      IsVehicleNeonLightEnabled(currentVehicle, 3),
        neonPositions = {
            IsVehicleNeonLightEnabled(currentVehicle, 0),
            IsVehicleNeonLightEnabled(currentVehicle, 1),
            IsVehicleNeonLightEnabled(currentVehicle, 2),
            IsVehicleNeonLightEnabled(currentVehicle, 3)
        },
        
        -- Récupérer la couleur des néons
        neonColor = {GetNeonColors(currentVehicle)},
        
        -- Récupérer la couleur des xenons
        xenonColor = GetXenonColor(currentVehicle),
        
        -- Couleurs et teintes
        paintType = GetVehicleModColor_1(currentVehicle),
        windowTint = GetVehicleWindowTint(currentVehicle),
        primaryColor = GetVehicleColours(currentVehicle),
        secondaryColor = select(2, GetVehicleColours(currentVehicle)),
        pearlColor = GetVehicleExtraColours(currentVehicle),
        wheelColor = select(2, GetVehicleExtraColours(currentVehicle)),
        
        -- Autres
        livery = GetVehicleLivery(currentVehicle),
        extras = GetVehicleExtras(),
        doors = {}
    }
    
    -- Mise à jour des données pour les catégories extérieur
    for category, data in pairs(exteriorCategories) do
        local modType = data.modType
        vehicleData[category] = GetVehicleMod(currentVehicle, modType) + 1
    end
    
    -- Mise à jour des données pour les catégories intérieur
    for category, data in pairs(interiorCategories) do
        local modType = data.modType
        vehicleData[category] = GetVehicleMod(currentVehicle, modType) + 1
    end
    
    -- Pour les roues
    for category, data in pairs(wheelCategories) do
        if category ~= "wheelType" and category ~= "wheelColor" then
            local modType = data.modType
            vehicleData[category] = GetVehicleMod(currentVehicle, modType) + 1
        end
    end
    
    -- Définir le type de roue actif
    local currentWheelType = GetVehicleWheelType(currentVehicle)
    for i, type in ipairs(wheelCategories.wheelType.types) do
        type.active = (type.id == currentWheelType)
    end
    
    -- Définir la teinte de vitre active
    local currentTint = GetVehicleWindowTint(currentVehicle)
    for i, tint in ipairs(windowTints) do
        tint.active = (tint.id == currentTint)
    end
    
    -- Envoyer les données au frontend, y compris vehicleColors
    SendNUIMessage({
        action = "open",
        performanceCategories = performanceCategories,
        exteriorCategories = exteriorCategories,
        interiorCategories = interiorCategories,
        colorCategories = colorCategories,
        wheelCategories = wheelCategories,
        windowTints = windowTints,
        wheelSmokeColors = wheelSmokeColors,
        vehicleData = vehicleData
    })
end

function CloseCustomUI()
    SetNuiFocus(false, false)
    SendNUIMessage({
        action = "close"
    })
end

-- Fonction pour récupérer tous les extras du véhicule
function GetVehicleExtras()
    local extras = {}
    for i = 0, 14 do
        if DoesExtraExist(currentVehicle, i) then
            extras[i] = IsVehicleExtraTurnedOn(currentVehicle, i)
        end
    end
    return extras
end

-- Callbacks NUI
RegisterNUICallback('changeCategory', function(data, cb)
    currentCategory = data.category
    
    -- Mise à jour de la caméra selon la catégorie
    local vehicle = currentVehicle
    if vehicle and DoesEntityExist(vehicle) then
        local coords = GetEntityCoords(vehicle)
        
        if currentCategory == "performance" then
            SetCamCoord(cam, coords.x - 2.0, coords.y + 1.0, coords.z + 0.5)
            SetCamRot(cam, 0.0, 0.0, 250.0, 2)
        elseif currentCategory == "exterior" then
            SetCamCoord(cam, coords.x - 2.5, coords.y, coords.z + 0.5)
            SetCamRot(cam, 0.0, 0.0, 180.0, 2)
        elseif currentCategory == "interior" then
            SetCamCoord(cam, coords.x, coords.y, coords.z + 1.5)
            SetCamRot(cam, 80.0, 0.0, 180.0, 2)
        elseif currentCategory == "color" then
            SetCamCoord(cam, coords.x - 3.0, coords.y, coords.z + 0.5)
            SetCamRot(cam, 0.0, 0.0, 180.0, 2)
        elseif currentCategory == "wheels" then
            SetCamCoord(cam, coords.x - 1.5, coords.y, coords.z - 0.5)
            SetCamRot(cam, -30.0, 0.0, 180.0, 2)
        end
        
        cb({success = true})
    else
        cb({success = false})
    end
end)
-- Tables de couleurs officielles GTA
local wheelColors = {
    [0] = { name = "Stock", rgb = {24, 24, 24} },
    [1] = { name = "Noir", rgb = {15, 15, 15} },
    [2] = { name = "Graphite", rgb = {28, 28, 28} },
    [3] = { name = "Noir Anthracite", rgb = {42, 42, 42} },
    [4] = { name = "Noir Acier", rgb = {17, 17, 17} },
    [5] = { name = "Acier foncé", rgb = {51, 51, 51} },
    [6] = { name = "Argent", rgb = {136, 136, 136} },
    [7] = { name = "Argent bleuté", rgb = {99, 115, 128} },
    [8] = { name = "Laminé", rgb = {109, 109, 109} },
    [9] = { name = "Argent ombré", rgb = {90, 90, 90} },
    [10] = { name = "Pierre", rgb = {122, 122, 122} },
    [11] = { name = "Minuit", rgb = {58, 58, 58} },
    [12] = { name = "Gunmetal", rgb = {71, 71, 71} },
    [13] = { name = "Aluminium", rgb = {187, 187, 187} },
    [14] = { name = "Chrome pur", rgb = {225, 225, 225} },
    [15] = { name = "Blanc frost", rgb = {240, 240, 240} },
    [16] = { name = "Or", rgb = {203, 164, 79} },
    [17] = { name = "Or rose", rgb = {202, 168, 117} },
    [18] = { name = "Or brossé", rgb = {172, 144, 94} },
    [19] = { name = "Chrome doré", rgb = {223, 193, 113} },
    [20] = { name = "Bronze", rgb = {143, 100, 69} },
    [21] = { name = "Bronze clair", rgb = {173, 123, 71} },
    [22] = { name = "Cuivre", rgb = {165, 78, 53} },
    [23] = { name = "Orange métallisé", rgb = {213, 100, 63} },
    [24] = { name = "Rouge foncé", rgb = {112, 0, 0} },
    [25] = { name = "Rouge vif", rgb = {189, 0, 0} },
    [26] = { name = "Rouge Garnet", rgb = {138, 11, 0} },
    [27] = { name = "Rouge classique", rgb = {192, 10, 10} },
    [28] = { name = "Rouge orangé", rgb = {227, 50, 26} },
    [29] = { name = "Rouge clair", rgb = {219, 34, 34} },
    [30] = { name = "Jaune", rgb = {240, 215, 79} },
    [31] = { name = "Jaune race", rgb = {243, 227, 56} },
    [32] = { name = "Vert citron", rgb = {84, 163, 86} },
    [33] = { name = "Vert forêt", rgb = {43, 79, 38} },
    [34] = { name = "Vert sapin", rgb = {27, 38, 32} },
    [35] = { name = "Olive", rgb = {89, 99, 55} },
    [36] = { name = "Vert kaki", rgb = {66, 71, 57} },
    [37] = { name = "Vert vif", rgb = {28, 170, 57} },
    [38] = { name = "Bleu marine", rgb = {28, 53, 81} },
    [39] = { name = "Bleu ultra", rgb = {37, 63, 143} },
    [40] = { name = "Bleu horizon", rgb = {26, 29, 36} },
    [41] = { name = "Bleu profond", rgb = {59, 86, 152} },
    [42] = { name = "Bleu surf", rgb = {65, 140, 209} },
    [43] = { name = "Cyan pastel", rgb = {60, 168, 203} },
    [44] = { name = "Bleu aqua", rgb = {53, 130, 131} },
    [45] = { name = "Teal", rgb = {45, 72, 78} },
    [46] = { name = "Bleu acier", rgb = {42, 55, 84} },
    [47] = { name = "Bleu nuit", rgb = {29, 31, 44} },
    [48] = { name = "Violet foncé", rgb = {44, 0, 85} },
    [49] = { name = "Violet", rgb = {74, 0, 105} },
    [50] = { name = "Rose", rgb = {172, 26, 145} },
    [51] = { name = "Magenta", rgb = {189, 75, 213} },
    [52] = { name = "Rose saumon", rgb = {216, 119, 144} },
    [53] = { name = "Vermilion Rose", rgb = {159, 29, 87} },
    [54] = { name = "Lavande", rgb = {125, 105, 126} },
    [55] = { name = "Violet Schafter", rgb = {101, 64, 125} },
    [56] = { name = "Indigo", rgb = {63, 28, 118} },
    [57] = { name = "Violet graphite", rgb = {47, 44, 74} },
    [58] = { name = "Violet minuit", rgb = {39, 19, 43} },
    [59] = { name = "Gris brillant", rgb = {202, 202, 202} }
}

local tyreSmokes = {
    [1] = { name = "Blanc", rgb = {255, 255, 255} },
    [2] = { name = "Noir", rgb = {0, 0, 0} },
    [3] = { name = "Bleu", rgb = {0, 0, 170} },
    [4] = { name = "Jaune", rgb = {255, 255, 0} },
    [5] = { name = "Violet", rgb = {170, 0, 170} },
    [6] = { name = "Orange", rgb = {255, 119, 0} },
    [7] = { name = "Rouge", rgb = {255, 0, 0} },
    [8] = { name = "Vert", rgb = {0, 255, 0} },
    [9] = { name = "Bleu électrique", rgb = {0, 0, 255} },
    [10] = { name = "Marron", rgb = {102, 51, 0} },
    [11] = { name = "Pourpre", rgb = {107, 0, 137} },
    [12] = { name = "Vert citron", rgb = {173, 255, 47} },
    [13] = { name = "Rose vif", rgb = {255, 20, 147} },
    [14] = { name = "Turquoise", rgb = {0, 206, 209} },
    [15] = { name = "Or", rgb = {255, 215, 0} },
    [16] = { name = "Azur", rgb = {0, 127, 255} },
    [17] = { name = "Menthe", rgb = {152, 251, 152} },
    [18] = { name = "Citron", rgb = {255, 250, 205} },
    [19] = { name = "Corail", rgb = {255, 127, 80} },
    [20] = { name = "Rouge vermillon", rgb = {223, 40, 0} }
}

RegisterNUICallback('applyModification', function(data, cb)
    if not currentVehicle or not DoesEntityExist(currentVehicle) then
        cb({success = false})
        return
    end
    
    local category = data.category
    local level = data.level
    local modType = GetModIndex(category)
    
    -- Définir obligatoirement le ModKit avant d'appliquer des modifications
    SetVehicleModKit(currentVehicle, 0)
    
    -- Application de la modification en fonction de la catégorie
    if modType then
        -- Cas spécial pour les toggle mods (turbo, xenon, smoke)
        if modType == 18 or modType == 22 or modType == 20 then
            ToggleVehicleMod(currentVehicle, modType, level == 1)
        else
            -- Vérifier que le niveau est valide pour ce véhicule
            local maxMods = GetNumVehicleMods(currentVehicle, modType)
            if level - 1 <= maxMods then
                SetVehicleMod(currentVehicle, modType, level - 1, false)
            end
        end
    elseif category == "windowTint" then
        SetVehicleWindowTint(currentVehicle, level)
    elseif category == "primaryColor" then
        local _, secondaryColor = GetVehicleColours(currentVehicle)
        SetVehicleColours(currentVehicle, level, secondaryColor)
    elseif category == "secondaryColor" then
        local primaryColor = GetVehicleColours(currentVehicle)
        SetVehicleColours(currentVehicle, primaryColor, level)
    elseif category == "pearlColor" then
        local _, wheelColor = GetVehicleExtraColours(currentVehicle)
        SetVehicleExtraColours(currentVehicle, level, wheelColor)
    elseif category == "wheelColor" then
        local pearlColor = GetVehicleExtraColours(currentVehicle)
        SetVehicleExtraColours(currentVehicle, pearlColor, level)
    elseif category == "wheelType" then
        SetVehicleWheelType(currentVehicle, level)
        -- Réinitialiser les roues après changement de type
        SetVehicleMod(currentVehicle, 23, -1, false)
        if IsThisModelABike(GetEntityModel(currentVehicle)) then
            SetVehicleMod(currentVehicle, 24, -1, false)
        end
    elseif category == "livery" then
        if GetVehicleLiveryCount(currentVehicle) > 0 then
            SetVehicleLivery(currentVehicle, level)
        end
    elseif category == "smokeColor" then
        if data.color then
            -- Cas d'une couleur prédéfinie par ID
            local id = tonumber(data.color)
            if id and tyreSmokes[id] then
                local r, g, b = table.unpack(tyreSmokes[id].rgb)
                SetVehicleTyreSmokeColor(currentVehicle, r, g, b)
                ToggleVehicleMod(currentVehicle, 20, true)
            end
        elseif data.rgb then
            -- Cas d'une couleur RGB personnalisée
            local rgb = data.rgb
            if type(rgb) == "table" and #rgb == 3 then
                SetVehicleTyreSmokeColor(currentVehicle, rgb[1], rgb[2], rgb[3])
                ToggleVehicleMod(currentVehicle, 20, true)
            end
        end
    elseif category == "extra" then
        local extraId = tonumber(data.extraId)
        if extraId ~= nil and DoesExtraExist(currentVehicle, extraId) then
            SetVehicleExtra(currentVehicle, extraId, level == 0)
        end
    elseif category == "door" then
        local doorId = tonumber(data.doorId)
        if doorId ~= nil then
            if level == 1 then
                SetVehicleDoorOpen(currentVehicle, doorId, false, false)
            else
                SetVehicleDoorShut(currentVehicle, doorId, false)
            end
        end
    elseif category == "paintType" then
        -- Type de peinture (normal, métallique, mat, etc.)
        SetVehicleModColor_1(currentVehicle, level, 0, 0)
    elseif category == "neons" then
        -- Activer/désactiver tous les néons
        for i = 0, 3 do
            SetVehicleNeonLightEnabled(currentVehicle, i, level == 1)
        end
    elseif category == "neonPosition" then
        -- Activer/désactiver un néon spécifique
        local positionId = tonumber(data.extraId or data)
        if positionId ~= nil and positionId >= 0 and positionId <= 3 then
            SetVehicleNeonLightEnabled(currentVehicle, positionId, level == 1)
        end
    elseif category == "neonColor" then
        -- Couleur des néons
        if data.color and type(data.color) == "table" and #data.color == 3 then
            SetVehicleNeonLightsColour(currentVehicle, data.color[1], data.color[2], data.color[3])
        elseif type(data) == "table" and #data == 3 then
            -- Compatibilité avec l'ancien format
            SetVehicleNeonLightsColour(currentVehicle, data[1], data[2], data[3])
        end
    elseif category == "xenonColor" then
        -- Couleur des phares xenon
        SetVehicleXenonLightsColour(currentVehicle, level)
    end
    
    -- Mettre à jour les propriétés du véhicule
    currentVehicleProperties = ESX.Game.GetVehicleProperties(currentVehicle)
    
    -- Calculer le nouveau prix
    CalculatePrice()
    
    -- Répondre au callback
    cb({
        success = true,
        price = currentPrice
    })
end)

-- Callback pour rotation du véhicule
RegisterNUICallback('rotate', function(data, cb)
    if not currentVehicle or not DoesEntityExist(currentVehicle) then
        cb({success = false})
        return
    end
    
    local direction = data.direction
    local currentHeading = GetEntityHeading(currentVehicle)
    
    if direction == "left" then
        SetEntityHeading(currentVehicle, currentHeading + 6)
    elseif direction == "right" then
        SetEntityHeading(currentVehicle, currentHeading - 6)
    end
    
    cb({success = true})
end)

-- Callback pour sortir du custom shop
RegisterNUICallback('exit', function(data, cb)
    ExitCustomShop(data.apply)
    cb({success = true})
end)

-- Callback pour gérer les portes
RegisterNUICallback('toggleDoor', function(data, cb)
    if not currentVehicle or not DoesEntityExist(currentVehicle) then
        cb({success = false})
        return
    end
    
    local doorId = tonumber(data.doorId)
    local open = data.open
    
    if doorId ~= nil then
        if open then
            SetVehicleDoorOpen(currentVehicle, doorId, false, false)
        else
            SetVehicleDoorShut(currentVehicle, doorId, false)
        end
    end
    
    cb({success = true})
end)

-- Calcule le prix total des modifications
function CalculatePrice()
    if not currentVehicle or not originalVehicleProperties or not currentVehicleProperties then
        return
    end
    
    local price = 0
    
    -- Comparer les propriétés originales et actuelles
    -- Performance
    if originalVehicleProperties.modEngine ~= nil and currentVehicleProperties.modEngine ~= nil then
        local origEngine = originalVehicleProperties.modEngine
        local currEngine = currentVehicleProperties.modEngine
        if currEngine > origEngine then
            price = price + performanceCategories.engine.prices[currEngine + 1]
        end
    end
    
    if originalVehicleProperties.modBrakes ~= nil and currentVehicleProperties.modBrakes ~= nil then
        local origBrakes = originalVehicleProperties.modBrakes
        local currBrakes = currentVehicleProperties.modBrakes
        if currBrakes > origBrakes then
            price = price + performanceCategories.brakes.prices[currBrakes + 1]
        end
    end
    
    if originalVehicleProperties.modTransmission ~= nil and currentVehicleProperties.modTransmission ~= nil then
        local origTransmission = originalVehicleProperties.modTransmission
        local currTransmission = currentVehicleProperties.modTransmission
        if currTransmission > origTransmission then
            price = price + performanceCategories.transmission.prices[currTransmission + 1]
        end
    end
    
    if originalVehicleProperties.modSuspension ~= nil and currentVehicleProperties.modSuspension ~= nil then
        local origSuspension = originalVehicleProperties.modSuspension
        local currSuspension = currentVehicleProperties.modSuspension
        if currSuspension > origSuspension then
            price = price + performanceCategories.suspension.prices[currSuspension + 1]
        end
    end
    
    -- Turbo
    if originalVehicleProperties.modTurbo ~= currentVehicleProperties.modTurbo then
        if currentVehicleProperties.modTurbo then
            price = price + performanceCategories.turbo.prices[1]
        end
    end
    
    -- Armure
    if originalVehicleProperties.modArmor ~= nil and currentVehicleProperties.modArmor ~= nil then
        local origArmor = originalVehicleProperties.modArmor
        local currArmor = currentVehicleProperties.modArmor
        if currArmor > origArmor then
            price = price + performanceCategories.armor.prices[currArmor + 1]
        end
    end
    
    -- Carrosserie (extérieur)
    for category, data in pairs(exteriorCategories) do
        local modType = data.modType
        local propName = "mod" .. string.upper(string.sub(category, 1, 1)) .. string.sub(category, 2)
        
        if originalVehicleProperties[propName] ~= nil and currentVehicleProperties[propName] ~= nil then
            local origMod = originalVehicleProperties[propName]
            local currMod = currentVehicleProperties[propName]
            
            if currMod > origMod and currMod >= 0 and currMod <= data.maxLevel then
                price = price + (data.prices[currMod] or 500)
            end
        end
    end
    
    -- Intérieur
    for category, data in pairs(interiorCategories) do
        local modType = data.modType
        local propName = "mod" .. modType
        
        if originalVehicleProperties[propName] ~= nil and currentVehicleProperties[propName] ~= nil then
            local origMod = originalVehicleProperties[propName]
            local currMod = currentVehicleProperties[propName]
            
            if currMod > origMod and currMod >= 0 and currMod <= data.maxLevel then
                price = price + (data.prices[currMod] or 300)
            end
        end
    end
    
    -- Couleurs
    if originalVehicleProperties.color1 ~= currentVehicleProperties.color1 then
        price = price + colorCategories.primary.prices[1]
    end
    
    if originalVehicleProperties.color2 ~= currentVehicleProperties.color2 then
        price = price + colorCategories.secondary.prices[1]
    end
    
    if originalVehicleProperties.pearlescentColor ~= currentVehicleProperties.pearlescentColor then
        price = price + colorCategories.pearlescent.prices[1]
    end
    
    if originalVehicleProperties.interiorColor ~= currentVehicleProperties.interiorColor then
        price = price + colorCategories.interior.prices[1]
    end
    
    if originalVehicleProperties.dashboardColor ~= currentVehicleProperties.dashboardColor then
        price = price + colorCategories.dashboard.prices[1]
    end
    
    -- Type de peinture
    if originalVehicleProperties.modColor1 ~= currentVehicleProperties.modColor1 then
        price = price + paintTypeCategories.primary.prices[currentVehicleProperties.modColor1 + 1]
    end
    
    -- Teinte des vitres
    if originalVehicleProperties.windowTint ~= currentVehicleProperties.windowTint then
        for i, t in ipairs(windowTints) do
            if t.id == currentVehicleProperties.windowTint then
                price = price + t.price
                break
            end
        end
    end
    
    -- Roues
    if originalVehicleProperties.wheelType ~= currentVehicleProperties.wheelType then
        for i, t in ipairs(wheelCategories.wheelType.types) do
            if t.id == currentVehicleProperties.wheelType then
                price = price + t.price
                break
            end
        end
    end
    
    if originalVehicleProperties.modFrontWheels ~= currentVehicleProperties.modFrontWheels then
        local wheelMod = currentVehicleProperties.modFrontWheels
        if wheelMod >= 0 and wheelCategories.frontWheel.prices[wheelMod + 1] then
            price = price + wheelCategories.frontWheel.prices[wheelMod + 1]
        end
    end
    
    -- Couleur des jantes
    if originalVehicleProperties.wheelColor ~= currentVehicleProperties.wheelColor then
        price = price + wheelCategories.wheelColor.prices[1]
    end
    
    -- Si c'est une moto, vérifier les roues arrière
    if IsThisModelABike(GetEntityModel(currentVehicle)) then
        if originalVehicleProperties.modBackWheels ~= currentVehicleProperties.modBackWheels then
            local wheelMod = currentVehicleProperties.modBackWheels
            if wheelMod >= 0 and wheelCategories.backWheel.prices[wheelMod + 1] then
                price = price + wheelCategories.backWheel.prices[wheelMod + 1]
            end
        end
    end
    
    -- Néons
    -- Vérifier si les néons ont été ajoutés
    local originalNeons = false
    local currentNeons = false
    
    for i = 0, 3 do
        if originalVehicleProperties.neonEnabled and originalVehicleProperties.neonEnabled[i+1] then
            originalNeons = true
        end
        
        if currentVehicleProperties.neonEnabled and currentVehicleProperties.neonEnabled[i+1] then
            currentNeons = true
        end
    end
    
    if not originalNeons and currentNeons then
        price = price + neonCategories.neons.prices[1]
    end
    
    -- Vérifier si la couleur des néons a changé
    if originalVehicleProperties.neonColor and currentVehicleProperties.neonColor then
        if originalVehicleProperties.neonColor[1] ~= currentVehicleProperties.neonColor[1] or
           originalVehicleProperties.neonColor[2] ~= currentVehicleProperties.neonColor[2] or
           originalVehicleProperties.neonColor[3] ~= currentVehicleProperties.neonColor[3] then
            price = price + neonCategories.neonColor.prices[1]
        end
    end
    
    -- Xenon
    if originalVehicleProperties.modXenon ~= currentVehicleProperties.modXenon then
        if currentVehicleProperties.modXenon then
            price = price + xenonCategories.xenon.prices[1]
        end
    end
    
    -- Couleur des xenons
    if originalVehicleProperties.xenonColor ~= currentVehicleProperties.xenonColor then
        price = price + xenonCategories.xenonColor.prices[1]
    end
    
    -- Mises à jour du prix
    currentPrice = price
    
    -- Envoyer le nouveau prix à l'UI
    SendNUIMessage({
        action = "updatePrice",
        price = currentPrice
    })
end

-- Fonctions pour obtenir les couleurs des néons et xenons
function GetNeonColors(vehicle)
    local r, g, b = GetVehicleNeonLightsColour(vehicle)
    return r, g, b
end

function GetXenonColor(vehicle)
    return GetVehicleXenonLightsColour(vehicle)
end

-- Extension de ESX.Game.GetVehicleProperties pour inclure les propriétés personnalisées
local originalGetVehicleProperties = ESX.Game.GetVehicleProperties
ESX.Game.GetVehicleProperties = function(vehicle)
    local props = originalGetVehicleProperties(vehicle)
    
    -- Ajouter les propriétés de néon
    props.neonEnabled = {}
    props.neonColor = {}
    
    for i = 0, 3 do
        props.neonEnabled[i+1] = IsVehicleNeonLightEnabled(vehicle, i)
    end
    
    local r, g, b = GetNeonColors(vehicle)
    props.neonColor[1] = r
    props.neonColor[2] = g
    props.neonColor[3] = b
    
    -- Ajouter la couleur des xenons
    props.xenonColor = GetXenonColor(vehicle)
    
    return props
end

-- Extension de ESX.Game.SetVehicleProperties pour inclure les propriétés personnalisées
local originalSetVehicleProperties = ESX.Game.SetVehicleProperties
ESX.Game.SetVehicleProperties = function(vehicle, props)
    originalSetVehicleProperties(vehicle, props)
    
    -- Appliquer les propriétés de néon
    if props.neonEnabled then
        for i = 0, 3 do
            SetVehicleNeonLightEnabled(vehicle, i, props.neonEnabled[i+1])
        end
    end
    
    if props.neonColor then
        SetVehicleNeonLightsColour(vehicle, props.neonColor[1], props.neonColor[2], props.neonColor[3])
    end
    
    -- Appliquer la couleur des xenons
    if props.xenonColor then
        SetVehicleXenonLightsColour(vehicle, props.xenonColor)
    end
    
    return true
end

-- Event handler pour la persistance des véhicules
RegisterNetEvent('persistent-vehicles/update-vehicle')
AddEventHandler('persistent-vehicles/update-vehicle', function(plate, props)
    -- Si le véhicule actuellement en customisation a cette plaque, ne rien faire
    if currentVehicle and GetVehicleNumberPlateText(currentVehicle) == plate then
        return
    end
    
    -- Trouve le véhicule avec cette plaque dans le monde
    local vehicles = ESX.Game.GetVehicles()
    for i=1, #vehicles do
        local vehicle = vehicles[i]
        if DoesEntityExist(vehicle) and GetVehicleNumberPlateText(vehicle) == plate then
            ESX.Game.SetVehicleProperties(vehicle, props)
            break
        end
    end
end)

-- Command pour tester le menu
RegisterCommand('custom', function()
    local playerPed = PlayerPedId()
    if IsPedInAnyVehicle(playerPed, false) and not isInCustomShop then
        local vehicle = GetVehiclePedIsIn(playerPed, false)
        if GetPedInVehicleSeat(vehicle, -1) == playerPed then
            EnterCustomShop(GetEntityHeading(vehicle))
        end
    end
end, false)

-- Gestionnaire d'événements pour synchroniser les modifications
RegisterNetEvent('custom:syncVehicle')
AddEventHandler('custom:syncVehicle', function(netId, props)
    local vehicle = NetworkGetEntityFromNetworkId(netId)
    if DoesEntityExist(vehicle) then
        ESX.Game.SetVehicleProperties(vehicle, props)
    end
end)