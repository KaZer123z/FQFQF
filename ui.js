$(function () {
  window.vehicleColors = {
    // Couleurs standards/classiques (type 0)
    standard: [
      { id: 0, name: "Noir", color: "#0d0d0d" },
      { id: 1, name: "Graphite", color: "#1c1d21" },
      { id: 2, name: "Noir Acier", color: "#32383d" },
      { id: 3, name: "Gris Foncé", color: "#454b4f" },
      { id: 4, name: "Gris Argenté", color: "#999da0" },
      { id: 5, name: "Gris Acier", color: "#c2c4c6" },
      { id: 6, name: "Argenté", color: "#979a97" },
      { id: 7, name: "Bleu Argenté", color: "#637380" },
      { id: 8, name: "Gris Roulé", color: "#63625c" },
      { id: 9, name: "Argenté Ombré", color: "#3c3f47" },
      { id: 10, name: "Métal", color: "#444e54" },
      { id: 11, name: "Gris Anthracite", color: "#1f2226" },
      { id: 12, name: "Noir", color: "#13181f" },
      { id: 13, name: "Gris", color: "#26282a" },
      { id: 14, name: "Gris Clair", color: "#1e2429" },
      { id: 15, name: "Noir Utilitaire", color: "#333333" },
      { id: 16, name: "Noir Poly", color: "#454545" },
      { id: 17, name: "Gris Foncé Utilitaire", color: "#616161" },
      { id: 18, name: "Argenté Utilitaire", color: "#7a7a7a" },
      { id: 19, name: "Métal Utilitaire", color: "#7f7f7f" },
      { id: 20, name: "Argenté Ombré Utilitaire", color: "#969696" },
      { id: 21, name: "Noir Usé", color: "#121212" },
      { id: 22, name: "Graphite Usé", color: "#2a2a2a" },
      { id: 23, name: "Gris Argenté Usé", color: "#676767" },
      { id: 24, name: "Argenté Usé", color: "#7a7a7a" },
      { id: 25, name: "Bleu Argenté Usé", color: "#aaaaaa" },
      { id: 26, name: "Argenté Ombré Usé", color: "#5a5a5a" },
      { id: 27, name: "Rouge", color: "#7b0a00" },
      { id: 28, name: "Rouge Torino", color: "#d10000" },
      { id: 29, name: "Rouge Formule", color: "#9c0f14" },
      { id: 30, name: "Rouge Flamme", color: "#a51e23" },
      { id: 31, name: "Rouge Gracieux", color: "#7b1a22" },
      { id: 32, name: "Rouge Grenat", color: "#6f1818" },
      { id: 33, name: "Rouge Désert", color: "#49111d" },
      { id: 34, name: "Rouge Cabernet", color: "#36070a" },
      { id: 35, name: "Rouge Bonbon", color: "#d44a17" },
      { id: 36, name: "Orange Lever de Soleil", color: "#cf360c" },
      { id: 37, name: "Or Classique", color: "#a77737" },
      { id: 38, name: "Orange", color: "#e25c10" },
      { id: 39, name: "Rouge Mat", color: "#cf1f21" },
      { id: 40, name: "Rouge Foncé Mat", color: "#732525" },
      { id: 41, name: "Orange Mat", color: "#f27d20" },
      { id: 42, name: "Jaune Mat", color: "#ffc91f" },
      { id: 43, name: "Rouge Utilitaire", color: "#9c1016" },
      { id: 44, name: "Rouge Vif Utilitaire", color: "#de0209" },
      { id: 45, name: "Rouge Grenat Utilitaire", color: "#610000" },
      { id: 46, name: "Rouge Usé", color: "#8a2c2c" },
      { id: 47, name: "Rouge Doré Usé", color: "#a06f62" },
      { id: 48, name: "Rouge Foncé Usé", color: "#521b1b" },
      { id: 49, name: "Vert Foncé", color: "#1d2129" },
      { id: 50, name: "Vert Course", color: "#122e2b" },
      { id: 51, name: "Vert Mer", color: "#1f3335" },
      { id: 52, name: "Vert Olive", color: "#2f4641" },
      { id: 53, name: "Vert", color: "#1a6330" },
      { id: 54, name: "Vert Essence", color: "#2d6836" },
      { id: 55, name: "Vert Citron Mat", color: "#4b6f44" },
      { id: 56, name: "Vert Foncé Utilitaire", color: "#1a292d" },
      { id: 57, name: "Vert Utilitaire", color: "#2b463b" },
      { id: 58, name: "Vert Foncé Usé", color: "#304f45" },
      { id: 59, name: "Vert Usé", color: "#5e7255" },
      { id: 60, name: "Mer Usée", color: "#63766b" },
      { id: 61, name: "Bleu Minuit", color: "#152b38" },
      { id: 62, name: "Bleu Foncé", color: "#132039" },
      { id: 63, name: "Bleu Saxony", color: "#304c7e" },
      { id: 64, name: "Bleu", color: "#4a6db5" },
      { id: 65, name: "Bleu Marin", color: "#1f4894" },
      { id: 66, name: "Bleu Portuaire", color: "#213b80" },
      { id: 67, name: "Bleu Diamant", color: "#5390d5" },
      { id: 68, name: "Bleu Surf", color: "#4a75bf" },
      { id: 69, name: "Bleu Nautique", color: "#5471c5" },
      { id: 70, name: "Bleu Vif", color: "#5c9ad6" },
      { id: 71, name: "Bleu Violet", color: "#214576" },
      { id: 72, name: "Bleu Spinnaker", color: "#47578f" },
      { id: 73, name: "Bleu Ultra", color: "#4c6584" },
      { id: 74, name: "Bleu Vif", color: "#5871a0" },
      { id: 75, name: "Bleu Foncé Utilitaire", color: "#11203f" },
      { id: 76, name: "Bleu Minuit Utilitaire", color: "#202c3a" },
      { id: 77, name: "Bleu Utilitaire", color: "#2c5885" },
      { id: 78, name: "Bleu Écume de Mer", color: "#5d95cb" },
      { id: 79, name: "Bleu Éclair", color: "#205a83" },
      { id: 80, name: "Bleu Maui Poly", color: "#2e86bd" },
      { id: 81, name: "Bleu Vif Utilitaire", color: "#3b8ec5" },
      { id: 82, name: "Bleu Foncé Mat", color: "#1e3c4d" },
      { id: 83, name: "Bleu Mat", color: "#2f5699" },
      { id: 84, name: "Bleu Minuit Mat", color: "#132237" },
      { id: 85, name: "Bleu Foncé Usé", color: "#6b799c" },
      { id: 86, name: "Bleu Usé", color: "#4984d5" },
      { id: 87, name: "Bleu Clair Usé", color: "#90b0d9" },
      { id: 88, name: "Jaune Taxi", color: "#ffcf20" },
      { id: 89, name: "Jaune Course", color: "#fbe212" },
      { id: 90, name: "Bronze", color: "#916532" },
      { id: 91, name: "Jaune Oiseau", color: "#e0e13d" },
      { id: 92, name: "Lime", color: "#98d223" },
      { id: 93, name: "Champagne", color: "#9b8c78" },
      { id: 94, name: "Beige Pueblo", color: "#503218" },
      { id: 95, name: "Ivoire Foncé", color: "#473f2b" },
      { id: 96, name: "Brun Chocolat", color: "#221b19" },
      { id: 97, name: "Brun Doré", color: "#653f23" },
      { id: 98, name: "Brun Clair", color: "#775c3e" },
      { id: 99, name: "Beige Paille", color: "#ac9975" },
      { id: 100, name: "Brun Mousse", color: "#6c6b4b" },
      { id: 101, name: "Brun Biston", color: "#5a6352" },
      { id: 102, name: "Brun Hêtre", color: "#9a9b80" },
      { id: 103, name: "Brun Hêtre Foncé", color: "#5e6157" },
      { id: 104, name: "Orange Chocolat", color: "#f2ad2e" },
      { id: 105, name: "Sable de Plage", color: "#bfae7b" },
      { id: 106, name: "Sable Décoloré", color: "#dfd5b2" },
      { id: 107, name: "Crème", color: "#f7edd5" },
      { id: 108, name: "Brun Utilitaire", color: "#3a2a1a" },
      { id: 109, name: "Brun Moyen Utilitaire", color: "#785f33" },
      { id: 110, name: "Brun Clair Utilitaire", color: "#b5a079" },
      { id: 111, name: "Blanc", color: "#fffff6" },
      { id: 112, name: "Blanc Givre", color: "#eaeaea" },
      { id: 113, name: "Beige Miel Usé", color: "#b0ab94" },
      { id: 114, name: "Brun Usé", color: "#453831" },
      { id: 115, name: "Brun Foncé Usé", color: "#2a282b" },
      { id: 116, name: "Beige Paille Usé", color: "#726c57" },
      { id: 117, name: "Acier Brossé", color: "#6a747c" },
      { id: 118, name: "Acier Noir Brossé", color: "#354158" },
      { id: 119, name: "Aluminium Brossé", color: "#9ba0a8" },
      { id: 120, name: "Chrome", color: "#5870a1" },
      { id: 121, name: "Blanc Cassé Usé", color: "#eae6de" },
      { id: 122, name: "Blanc Cassé Utilitaire", color: "#dfddd0" },
      { id: 123, name: "Orange Usé", color: "#f2ad2e" },
      { id: 124, name: "Orange Clair Usé", color: "#f9a458" },
      { id: 125, name: "Vert Securicor", color: "#83c566" },
      { id: 126, name: "Jaune Taxi Usé", color: "#f7ed5a" },
      { id: 127, name: "Bleu Police", color: "#4cc3da" },
    ],

    // Couleurs métalliques (type 1)
    metallic: [
      { id: 0, name: "Noir Métallisé", color: "#0d0d0d" },
      { id: 1, name: "Graphite Noir Métallisé", color: "#1c1d21" },
      { id: 2, name: "Noir Acier Métallisé", color: "#32383d" },
      { id: 3, name: "Argent Foncé Métallisé", color: "#454b4f" },
      { id: 4, name: "Argent Métallisé", color: "#999da0" },
      { id: 5, name: "Argent Bleu Métallisé", color: "#c2c4c6" },
      { id: 6, name: "Gris Acier Métallisé", color: "#979a97" },
      { id: 7, name: "Argent Ombré Métallisé", color: "#637380" },
      { id: 8, name: "Argent Pierre Métallisé", color: "#63625c" },
      { id: 9, name: "Argent Minuit Métallisé", color: "#3c3f47" },
      { id: 10, name: "Métal Métallisé", color: "#444e54" },
      { id: 11, name: "Gris Anthracite Métallisé", color: "#1f2226" },
      { id: 27, name: "Rouge Métallisé", color: "#7b0a00" },
      { id: 28, name: "Rouge Torino Métallisé", color: "#d10000" },
      { id: 29, name: "Rouge Formule Métallisé", color: "#9c0f14" },
      { id: 30, name: "Rouge Flamme Métallisé", color: "#a51e23" },
      { id: 31, name: "Rouge Gracieux Métallisé", color: "#7b1a22" },
      { id: 32, name: "Rouge Grenat Métallisé", color: "#6f1818" },
      { id: 33, name: "Rouge Désert Métallisé", color: "#49111d" },
      { id: 34, name: "Rouge Cabernet Métallisé", color: "#36070a" },
      { id: 35, name: "Rouge Bonbon Métallisé", color: "#d44a17" },
      { id: 36, name: "Orange Lever de Soleil Métallisé", color: "#cf360c" },
      { id: 37, name: "Or Classique Métallisé", color: "#a77737" },
      { id: 38, name: "Orange Métallisé", color: "#e25c10" },
      { id: 49, name: "Vert Foncé Métallisé", color: "#1d2129" },
      { id: 50, name: "Vert Course Métallisé", color: "#122e2b" },
      { id: 51, name: "Vert Mer Métallisé", color: "#1f3335" },
      { id: 52, name: "Vert Olive Métallisé", color: "#2f4641" },
      { id: 53, name: "Vert Métallisé", color: "#1a6330" },
      { id: 54, name: "Vert Essence Métallisé", color: "#2d6836" },
      { id: 61, name: "Bleu Minuit Métallisé", color: "#152b38" },
      { id: 62, name: "Bleu Foncé Métallisé", color: "#132039" },
      { id: 63, name: "Bleu Saxony Métallisé", color: "#304c7e" },
      { id: 64, name: "Bleu Métallisé", color: "#4a6db5" },
      { id: 65, name: "Bleu Marin Métallisé", color: "#1f4894" },
      { id: 66, name: "Bleu Portuaire Métallisé", color: "#213b80" },
      { id: 67, name: "Bleu Diamant Métallisé", color: "#5390d5" },
      { id: 68, name: "Bleu Surf Métallisé", color: "#4a75bf" },
      { id: 69, name: "Bleu Nautique Métallisé", color: "#5471c5" },
      { id: 70, name: "Bleu Vif Métallisé", color: "#5c9ad6" },
      { id: 71, name: "Bleu Violet Métallisé", color: "#214576" },
      { id: 72, name: "Bleu Spinnaker Métallisé", color: "#47578f" },
      { id: 73, name: "Bleu Ultra Métallisé", color: "#4c6584" },
      { id: 74, name: "Bleu Vif Métallisé", color: "#5871a0" },
      { id: 88, name: "Jaune Taxi Métallisé", color: "#ffcf20" },
      { id: 89, name: "Jaune Course Métallisé", color: "#fbe212" },
      { id: 90, name: "Bronze Métallisé", color: "#916532" },
      { id: 91, name: "Jaune Oiseau Métallisé", color: "#e0e13d" },
      { id: 92, name: "Lime Métallisé", color: "#98d223" },
      { id: 93, name: "Champagne Métallisé", color: "#9b8c78" },
      { id: 94, name: "Beige Pueblo Métallisé", color: "#503218" },
      { id: 95, name: "Ivoire Foncé Métallisé", color: "#473f2b" },
      { id: 96, name: "Brun Chocolat Métallisé", color: "#221b19" },
      { id: 97, name: "Brun Doré Métallisé", color: "#653f23" },
      { id: 98, name: "Brun Clair Métallisé", color: "#775c3e" },
      { id: 99, name: "Beige Paille Métallisé", color: "#ac9975" },
      { id: 100, name: "Brun Mousse Métallisé", color: "#6c6b4b" },
      { id: 101, name: "Brun Biston Métallisé", color: "#5a6352" },
      { id: 102, name: "Brun Hêtre Métallisé", color: "#9a9b80" },
      { id: 103, name: "Brun Hêtre Foncé Métallisé", color: "#5e6157" },
      { id: 104, name: "Orange Chocolat Métallisé", color: "#f2ad2e" },
      { id: 105, name: "Sable de Plage Métallisé", color: "#bfae7b" },
      { id: 106, name: "Sable Décoloré Métallisé", color: "#dfd5b2" },
      { id: 107, name: "Crème Métallisée", color: "#f7edd5" },
      { id: 111, name: "Blanc Métallisé", color: "#fffff6" },
      { id: 112, name: "Blanc Givre Métallisé", color: "#eaeaea" },
      { id: 125, name: "Vert Securicor Métallisé", color: "#83c566" },
      { id: 137, name: "Rose Vermillon Métallisé", color: "#df5891" },
      { id: 141, name: "Bleu Noir Métallisé", color: "#0f0f64" },
      { id: 142, name: "Violet Noir Métallisé", color: "#0f0f2c" },
      { id: 143, name: "Rouge Noir Métallisé", color: "#200000" },
      { id: 145, name: "Violet Métallisé", color: "#180025" },
      { id: 146, name: "Bleu Foncé V Métallisé", color: "#000625" },
      { id: 150, name: "Rouge Lave Métallisé", color: "#8e0000" },
    ],

    // Couleurs mates (type 3)
    matte: [
      { id: 12, name: "Noir Mat", color: "#13181f" },
      { id: 13, name: "Gris Mat", color: "#26282a" },
      { id: 14, name: "Gris Clair Mat", color: "#1e2429" },
      { id: 39, name: "Rouge Mat", color: "#cf1f21" },
      { id: 40, name: "Rouge Foncé Mat", color: "#732525" },
      { id: 41, name: "Orange Mat", color: "#f27d20" },
      { id: 42, name: "Jaune Mat", color: "#ffc91f" },
      { id: 55, name: "Vert Citron Mat", color: "#4b6f44" },
      { id: 82, name: "Bleu Foncé Mat", color: "#1e3c4d" },
      { id: 83, name: "Bleu Mat", color: "#2f5699" },
      { id: 84, name: "Bleu Minuit Mat", color: "#132237" },
      { id: 128, name: "Vert Mat", color: "#4e6443" },
      { id: 129, name: "Brun Mat", color: "#bcac8f" },
      { id: 131, name: "Blanc Mat", color: "#fcfcfc" },
      { id: 148, name: "Violet Mat", color: "#0f0f66" },
      { id: 149, name: "Violet Foncé Mat", color: "#05063b" },
      { id: 151, name: "Vert Forêt Mat", color: "#0b5839" },
      { id: 152, name: "Olive Terne Mat", color: "#4d5725" },
      { id: 153, name: "Brun Désert Mat", color: "#7d5c58" },
      { id: 154, name: "Tan Désert Mat", color: "#c3b492" },
      { id: 155, name: "Vert Feuillage Mat", color: "#597d3d" },
    ],

    // Couleurs métal (type 4)
    metal: [
      { id: 117, name: "Acier Brossé", color: "#6a747c" },
      { id: 118, name: "Acier Noir Brossé", color: "#354158" },
      { id: 119, name: "Aluminium Brossé", color: "#9ba0a8" },
      { id: 120, name: "Chrome", color: "#5870a1" },
      { id: 156, name: "Défaut Couleur Alliage", color: "#81827f" },
      { id: 157, name: "Epsilon Bleu", color: "#1153a4" },
      { id: 158, name: "Or Pur", color: "#af9f6f" },
      { id: 159, name: "Or Brossé", color: "#d4af37" },
      { id: 160, name: "Or Secret", color: "#bababa" },
    ],

    // Couleurs chameleon (type 5) - Ces couleurs changent en fonction de l'angle de vue
    chameleon: [
      { id: 135, name: "Rose Vif", color: "#f21f99" },
      { id: 136, name: "Rose Saumon", color: "#fdd6cd" },
      { id: 138, name: "Orange", color: "#f6ae20" },
      { id: 139, name: "Vert", color: "#b0ee6e" },
      { id: 140, name: "Bleu", color: "#08a0ed" },
    ],
  };

  // Données des catégories reçues du serveur
  let performanceCategories = {};
  let exteriorCategories = {};
  let interiorCategories = {};
  let colorCategories = {};
  let wheelCategories = {};
  let windowTints = [];
  let vehicleColors = [];
  let wheelSmokeColors = [];

  // Données du véhicule actuel
  let vehicleData = {};

  // Variable pour la couleur de fumée actuelle des roues
  let currentSmokeColor = 1;

  // Total des modifications
  let totalPrice = 0;
  let currentCategory = "performance";

  // Fonction pour générer dynamiquement les éléments de l'interface pour les performances
  function generatePerformanceUI() {
    $("#performance-container").empty();

    // Ajouter un titre
    $("#performance-container").append(
      `<div class="section-title">Customisation performances</div>`
    );

    // Créer les éléments pour chaque catégorie de performance
    const categories = [
      "engine",
      "brakes",
      "transmission",
      "suspension",
      "armor",
      "turbo",
    ];

    categories.forEach((category) => {
      const data = performanceCategories[category];
      if (!data) return;

      if (category === "turbo") {
        // Cas spécial pour le turbo (toggle)
        const turboToggle = `
                      <div class="turbo">
                          <div class="text-wrapper">${data.name}</div>
                          <div class="turbo-btn" id="turbo-toggle" style="background-color: ${
                            data.current ? "#398d75" : "#12121281"
                          }"></div>
                      </div>
                  `;
        $("#performance-container").append(turboToggle);

        // Gestionnaire d'événement
        $("#turbo-toggle").click(() => {
          const newLevel = data.current === 0 ? 1 : 0;
          data.current = newLevel;
          applyModification("turbo", newLevel);

          // Mettre à jour l'interface
          $("#turbo-toggle").css(
            "background-color",
            newLevel === 1 ? "#398d75" : "#12121281"
          );
        });
      } else {
        // Pour les autres catégories (sliders)
        const modItem = `
                      <div class="mod-item" data-category="${category}">
                          <div class="mod-item-title">${data.name}</div>
                          <div class="mod-item-level" id="${category}-level">${
          data.current === 0 ? "Aucun" : "Niveau " + data.current
        }</div>
                          <div class="selection">
                              <div class="ligne"></div>
                              <div class="rond" id="${category}-slider"></div>
                              <div class="fleches" id="${category}-right">
                                  <div class="fleche"></div>
                                  <div class="fleche-2"></div>
                              </div>
                              <div class="fleches-2" id="${category}-left">
                                  <div class="fleche"></div>
                                  <div class="fleche-2"></div>
                              </div>
                          </div>
                      </div>
                  `;

        $("#performance-container").append(modItem);

        // Initialiser le slider
        const lineWidth = 260;
        const position = (data.current / data.maxLevel) * lineWidth;
        $(`#${category}-slider`).css("left", 45 + position);

        // Gestionnaires d'événements
        $(`#${category}-left`).click(() => changeModLevel(category, -1));
        $(`#${category}-right`).click(() => changeModLevel(category, 1));
      }
    });

    // Initialiser les sliders glissables
    makeSlidersDraggable();
  }

  function generateInteriorUI() {
    $("#interior-container").empty();

    // Ajouter un titre
    $("#interior-container").append(
      `<div class="section-title">Customisation intérieur</div>`
    );

    // Variable pour vérifier si des options sont disponibles
    let hasOptions = false;

    // Générer les éléments pour chaque catégorie intérieure
    for (const category in interiorCategories) {
      const data = interiorCategories[category];

      // Une catégorie est valide si maxLevel > 0
      // Ne pas afficher les options non disponibles
      if (data && data.maxLevel > 0) {
        hasOptions = true;

        const modItem = `
                  <div class="mod-item" data-category="${category}">
                      <div class="mod-item-title">${data.name}</div>
                      <div class="mod-item-level" id="${category}-level">${
          data.current > 0 ? "Niveau " + data.current : "Aucun"
        }</div>
                      <div class="selection">
                          <div class="ligne"></div>
                          <div class="rond" id="${category}-slider"></div>
                          <div class="fleches" id="${category}-right">
                              <div class="fleche"></div>
                              <div class="fleche-2"></div>
                          </div>
                          <div class="fleches-2" id="${category}-left">
                              <div class="fleche"></div>
                              <div class="fleche-2"></div>
                          </div>
                      </div>
                  </div>
              `;

        $("#interior-container").append(modItem);

        // Initialiser le slider - Calcul amélioré de la position
        const lineWidth = 260;
        const maxLevel = data.maxLevel || 1; // Éviter la division par zéro
        const position =
          maxLevel > 0 ? ((data.current || 0) / maxLevel) * lineWidth : 0;

        $(`#${category}-slider`).css("left", 45 + position);

        // Gestionnaires d'événements améliorés
        $(`#${category}-left`).click(() => {
          if (data.current > 0) {
            changeModLevel(category, -1);
          }
        });

        $(`#${category}-right`).click(() => {
          if (data.current < data.maxLevel) {
            changeModLevel(category, 1);
          }
        });
      }
    }

    // Afficher un message si aucune option n'est disponible
    if (!hasOptions) {
      $("#interior-container").append(`
              <div class="mod-item-title2" style="margin: 20px 0; text-align: center;">
                  Aucune option d'intérieur disponible pour ce véhicule
              </div>
          `);
    }

    // Initialiser les sliders glissables améliorés
    makeSlidersDraggable();
  }

  // Fonction pour générer dynamiquement les éléments de l'interface pour l'extérieur
  function generateExteriorUI() {
    $("#exterior-container").empty();

    // Ajouter un titre
    $("#exterior-container").append(
      `<div class="section-title">Customisation extérieur</div>`
    );

    // Variable pour vérifier si des options sont disponibles
    let hasExteriorOptions = false;

    // Générer les éléments pour chaque catégorie extérieure
    for (const category in exteriorCategories) {
      const data = exteriorCategories[category];

      // Ne pas afficher les options qui ne sont pas disponibles
      if (data && data.maxLevel > 0) {
        hasExteriorOptions = true;

        const modItem = `
                <div class="mod-item" data-category="${category}">
                    <div class="mod-item-title">${data.name}</div>
                    <div class="mod-item-level" id="${category}-level">${
          data.current > 0 ? "Niveau " + data.current : "Aucun"
        }</div>
                    <div class="selection">
                        <div class="ligne"></div>
                        <div class="rond" id="${category}-slider"></div>
                        <div class="fleches" id="${category}-right">
                            <div class="fleche"></div>
                            <div class="fleche-2"></div>
                        </div>
                        <div class="fleches-2" id="${category}-left">
                            <div class="fleche"></div>
                            <div class="fleche-2"></div>
                        </div>
                    </div>
                </div>
            `;

        $("#exterior-container").append(modItem);

        // Initialiser le slider
        const lineWidth = 260;
        const position = (data.current / data.maxLevel) * lineWidth;
        $(`#${category}-slider`).css("left", 45 + position);

        // Gestionnaires d'événements
        $(`#${category}-left`).click(() => changeModLevel(category, -1));
        $(`#${category}-right`).click(() => changeModLevel(category, 1));
      }
    }

    // Ajouter les options de livery
    // Vérifions si le véhicule a des livrées disponibles
    let liveryCount = 0;
    if (vehicleData.livery !== undefined) {
      // Si on a déjà l'information sur les livrées disponibles
      liveryCount = vehicleData.livery + 5; // Estimation du nombre total de livrées
    } else if (typeof GetVehicleLiveryCount === "function") {
      // Si la fonction GetVehicleLiveryCount est disponible
      liveryCount = GetVehicleLiveryCount(currentVehicle);
    } else {
      // Par défaut, supposons qu'il y a au moins quelques livrées
      liveryCount = 5;
    }

    if (liveryCount > 0) {
      hasExteriorOptions = true;

      const modItem = `
            <div class="mod-item" data-category="livery">
                <div class="mod-item-title">Livery</div>
                <div class="mod-item-level" id="livery-level">${
                  vehicleData.livery > 0
                    ? "Style " + vehicleData.livery
                    : "Aucun"
                }</div>
                <div class="selection">
                    <div class="ligne"></div>
                    <div class="rond" id="livery-slider"></div>
                    <div class="fleches" id="livery-right">
                        <div class="fleche"></div>
                        <div class="fleche-2"></div>
                    </div>
                    <div class="fleches-2" id="livery-left">
                        <div class="fleche"></div>
                        <div class="fleche-2"></div>
                    </div>
                </div>
            </div>
        `;

      $("#exterior-container").append(modItem);

      // Initialiser le slider pour livery
      const lineWidth = 260;
      const maxLivery = Math.max(1, liveryCount); // Éviter la division par zéro
      let liveryPos = 0;
      if (vehicleData.livery !== undefined && vehicleData.livery >= 0) {
        liveryPos = (vehicleData.livery / maxLivery) * lineWidth;
      }
      $(`#livery-slider`).css("left", 45 + liveryPos);

      // Gestionnaires d'événements pour livery
      $(`#livery-left`).click(() => changeLivery(-1, maxLivery));
      $(`#livery-right`).click(() => changeLivery(1, maxLivery));
    }

    // Si aucune option n'est disponible, afficher un message
    if (!hasExteriorOptions) {
      $("#exterior-container").append(`
            <div class="mod-item-title2" style="margin: 20px 0; text-align: center;">
                Aucune option d'extérieur disponible pour ce véhicule
            </div>
        `);
    }

    // Initialiser les sliders glissables
    makeSlidersDraggable();
  }

  // Fonction pour changer de livery
  function changeLivery(change, maxLivery) {
    let currentLivery = vehicleData.livery || 0;
    let newLivery = currentLivery + change;

    // Vérifier les limites
    if (newLivery < 0) newLivery = 0;
    if (newLivery >= maxLivery) newLivery = maxLivery - 1;

    // Mettre à jour si changement
    if (newLivery !== currentLivery) {
      // Mettre à jour la donnée locale
      vehicleData.livery = newLivery;

      // Mettre à jour l'interface
      $("#livery-level").text(newLivery > 0 ? "Style " + newLivery : "Aucun");

      // Calculer la position du slider
      const lineWidth = 260;
      const position = (newLivery / maxLivery) * lineWidth;
      $("#livery-slider").css("left", 45 + position);

      // Appliquer la modification au véhicule via NUI
      applyModification("livery", newLivery);
    }
  }

  // Fonction pour rendre les sliders glissables
  function makeSlidersDraggable() {
    // Sélectionne tous les sliders
    $(".rond").each(function () {
      const slider = $(this);
      const sliderId = slider.attr("id");
      if (!sliderId) return;

      const category = sliderId.replace("-slider", "");

      // Vérifier si le slider est désactivé
      if (slider.css("cursor") === "not-allowed") return;

      const sliderParent = slider.parent();
      const lineWidth = 260; // Largeur de la ligne en pixels
      let isDragging = false;

      // Fonction pour calculer le niveau à partir de la position
      function getLevelFromPosition(position) {
        // Convertir la position en pourcentage de la ligne
        const lineStart = 45; // Position de début du slider
        const relativePosition = position - lineStart;

        if (relativePosition <= 0) return 0;

        // Déterminer le niveau max et les données
        let maxLevel = 1;
        let data;

        if (
          category === "engine" ||
          category === "brakes" ||
          category === "transmission" ||
          category === "suspension" ||
          category === "armor"
        ) {
          data = performanceCategories[category];
          maxLevel = data.maxLevel;
        } else if (category === "windowTint") {
          maxLevel = windowTints.length - 1;
        } else if (category === "wheelType") {
          maxLevel = wheelCategories.wheelType.types.length - 1;
        } else if (category === "livery") {
          // Déterminer le nombre de livrées disponibles
          let liveryCount = 0;
          if (vehicleData.livery !== undefined) {
            liveryCount = vehicleData.livery + 5; // Estimation
          } else if (typeof GetVehicleLiveryCount === "function") {
            liveryCount = GetVehicleLiveryCount(currentVehicle);
          } else {
            liveryCount = 5; // Valeur par défaut
          }
          maxLevel = Math.max(1, liveryCount);
        } else if (exteriorCategories[category]) {
          data = exteriorCategories[category];
          maxLevel = data.maxLevel;
        } else if (interiorCategories[category]) {
          data = interiorCategories[category];
          maxLevel = data.maxLevel;
        } else if (category === "frontWheel" || category === "backWheel") {
          data = wheelCategories[category];
          maxLevel = data.maxLevel;
        }

        if (maxLevel <= 0) return 0;

        if (relativePosition >= lineWidth) return maxLevel;

        // Amélioration: calcul du niveau avec arrondi à l'entier le plus proche
        const levelFloat = (relativePosition / lineWidth) * maxLevel;
        return Math.round(levelFloat);
      }

      // Gestionnaire de début de glisser
      slider.on("mousedown touchstart", function (e) {
        e.preventDefault();
        isDragging = true;

        // Ajouter une classe pour indiquer que le slider est actif
        slider.addClass("dragging");

        // Désactiver la sélection de texte pendant le glissement
        $("body").css("user-select", "none");
      });

      // Gestionnaire de mouvement pendant le glisser
      $(document).on("mousemove touchmove", function (e) {
        if (!isDragging) return;

        let clientX;
        if (e.type === "touchmove") {
          clientX = e.originalEvent.touches[0].clientX;
        } else {
          clientX = e.clientX;
        }

        // Calculer la position relative à la ligne du slider
        const sliderRect = sliderParent[0].getBoundingClientRect();
        const newPosition = clientX - sliderRect.left;

        // Limiter la position au début et à la fin de la ligne
        const minPosition = 45; // Position minimale (début de la ligne)
        const maxPosition = minPosition + lineWidth; // Position maximale (fin de la ligne)
        const clampedPosition = Math.max(
          minPosition,
          Math.min(newPosition, maxPosition)
        );

        // Déplacer le rond du slider
        slider.css("left", clampedPosition + "px");

        // Calculer et appliquer le niveau correspondant
        const newLevel = getLevelFromPosition(clampedPosition);

        // Appliquer la modification selon la catégorie
        applyLevelToCategory(
          category,
          newLevel,
          clampedPosition,
          minPosition,
          lineWidth
        );
      });

      // Gestionnaire de fin de glisser
      $(document).on("mouseup touchend", function () {
        if (isDragging) {
          isDragging = false;
          slider.removeClass("dragging");
          $("body").css("user-select", "");
        }
      });
    });
  }

  function applyLevelToCategory(
    category,
    newLevel,
    clampedPosition,
    minPosition,
    lineWidth
  ) {
    if (category === "windowTint") {
      // Cas spécial pour les teintes de vitres
      const tintIndex = Math.min(
        Math.floor(
          (clampedPosition - minPosition) /
            (lineWidth / (windowTints.length - 1))
        ),
        windowTints.length - 1
      );
      if (tintIndex >= 0 && windowTints[tintIndex]) {
        // Mettre à jour les états actifs
        for (let i = 0; i < windowTints.length; i++) {
          windowTints[i].active = i === tintIndex;
        }

        // Mettre à jour l'interface
        $("#windowTint-level").text(windowTints[tintIndex].name);

        // Appliquer la modification
        applyModification("windowTint", windowTints[tintIndex].id);
      }
    } else if (category === "wheelType") {
      // Cas spécial pour les types de roues
      const types = wheelCategories.wheelType.types;
      const typeIndex = Math.min(
        Math.floor(
          (clampedPosition - minPosition) / (lineWidth / (types.length - 1))
        ),
        types.length - 1
      );
      if (typeIndex >= 0 && types[typeIndex]) {
        // Mettre à jour les états actifs
        for (let i = 0; i < types.length; i++) {
          types[i].active = i === typeIndex;
        }

        // Mettre à jour l'interface
        $("#wheelType-level").text(types[typeIndex].name);

        // Appliquer la modification
        applyModification("wheelType", types[typeIndex].id);
      }
    } else if (category === "livery") {
      // Cas spécial pour livery
      // Mettre à jour l'interface
      $("#livery-level").text(newLevel > 0 ? "Style " + newLevel : "Aucun");

      // Mettre à jour les données
      vehicleData.livery = newLevel;

      // Appliquer la modification
      applyModification("livery", newLevel);
    } else {
      // Pour les autres catégories (performances, extérieur, intérieur, roues)
      let data;
      let currentLevel;

      if (
        category === "engine" ||
        category === "brakes" ||
        category === "transmission" ||
        category === "suspension" ||
        category === "armor"
      ) {
        data = performanceCategories[category];
      } else if (exteriorCategories[category]) {
        data = exteriorCategories[category];
      } else if (interiorCategories[category]) {
        data = interiorCategories[category];
      } else if (category === "frontWheel" || category === "backWheel") {
        data = wheelCategories[category];
      }

      if (data) {
        currentLevel = data.current || 0;
        const maxLevel = data.maxLevel || 0;

        if (newLevel !== currentLevel && newLevel <= maxLevel) {
          // Mettre à jour les données
          data.current = newLevel;

          // Mettre à jour l'interface
          $(`#${category}-level`).text(
            newLevel === 0 ? "Aucun" : "Niveau " + newLevel
          );

          // Appliquer la modification
          applyModification(category, newLevel);
        }
      }
    }
  }

  // Génération de la section peinture
  // Génération de la section phares xenon
  function generateXenonSection() {
    const xenonSection = $("#xenon-section");

    // Activer/désactiver les xenons
    xenonSection.append(`
      <div class="color-section">
        <div class="color-section-header">
          <div class="color-title">Phares Xenon</div>
        </div>
        
        <div class="color-content">
          <div class="extra-toggle">
            <div class="extra-toggle-btn ${
              vehicleData.xenonEnabled ? "active" : ""
            }" id="xenon-main-toggle"></div>
            <div class="extra-toggle-label">Activer les phares xenon</div>
          </div>
        </div>
      </div>
    `);

    // Couleurs des phares xenon
    xenonSection.append(`
      <div class="color-section">
        <div class="color-section-header">
          <div class="color-title">Couleur des phares</div>
        </div>
        
        <div class="color-content">
          <div class="xenon-colors-grid">
            <div class="color-item xenon-color" data-color="-1" style="background-color: #ffffff"><span>Défaut</span></div>
            <div class="color-item xenon-color" data-color="0" style="background-color: #ffffff"><span>Blanc</span></div>
            <div class="color-item xenon-color" data-color="1" style="background-color: #0000ff"><span>Bleu</span></div>
            <div class="color-item xenon-color" data-color="2" style="background-color: #0080ff"><span>Bleu E.</span></div>
            <div class="color-item xenon-color" data-color="3" style="background-color: #00ff80"><span>Vert M.</span></div>
            <div class="color-item xenon-color" data-color="4" style="background-color: #80ff00"><span>Vert L.</span></div>
            <div class="color-item xenon-color" data-color="5" style="background-color: #ffff00"><span>Jaune</span></div>
            <div class="color-item xenon-color" data-color="6" style="background-color: #ffc800"><span>Or</span></div>
            <div class="color-item xenon-color" data-color="7" style="background-color: #ff8000"><span>Orange</span></div>
            <div class="color-item xenon-color" data-color="8" style="background-color: #ff0000"><span>Rouge</span></div>
            <div class="color-item xenon-color" data-color="9" style="background-color: #ff00ff"><span>Rose</span></div>
            <div class="color-item xenon-color" data-color="10" style="background-color: #8000ff"><span>Violet</span></div>
          </div>
          <button class="apply-color-btn" id="apply-xenon-color">Appliquer</button>
        </div>
      </div>
    `);

    // Variable pour suivre la couleur xenon sélectionnée
    let selectedXenonColor = vehicleData.xenonColor;

    // Sélectionner la couleur xenon active
    if (vehicleData.xenonColor !== undefined) {
      $(`.xenon-color[data-color="${vehicleData.xenonColor}"]`).addClass(
        "active"
      );
    }

    // Gestionnaires d'événements
    $("#xenon-main-toggle").on("click", function () {
      const isActive = $(this).hasClass("active");
      if (isActive) {
        $(this).removeClass("active");
        applyModification("xenon", 0);
        showNotification("Phares xenon désactivés");
      } else {
        $(this).addClass("active");
        applyModification("xenon", 1);
        showNotification("Phares xenon activés");
      }
    });

    $(".xenon-color").on("click", function () {
      $(".xenon-color").removeClass("selected");
      $(this).addClass("selected");
      selectedXenonColor = parseInt($(this).data("color"));
    });

    $("#apply-xenon-color").on("click", function () {
      if (selectedXenonColor !== undefined) {
        // Appliquer la couleur
        applyModification("xenonColor", selectedXenonColor);

        // Mettre à jour l'interface
        $(".xenon-color").removeClass("active");
        $(`.xenon-color[data-color="${selectedXenonColor}"]`).addClass(
          "active"
        );

        // Activer les xenons si pas déjà actifs
        if (!$("#xenon-main-toggle").hasClass("active")) {
          $("#xenon-main-toggle").addClass("active");
          applyModification("xenon", 1);
        }

        // Notification
        const colorName = $(
          `.xenon-color[data-color="${selectedXenonColor}"] span`
        ).text();
        showNotification(`Couleur de xenon: ${colorName}`);
      }
    });
  }

  // Fonction pour trouver une couleur GTA par son ID
  function findGTAColorById(id) {
    // Chercher dans toutes les collections de couleurs
    let collections = [vehicleColors, matteColors, metalColors];

    for (let collection of collections) {
      let color = collection.find((color) => color.id === id);
      if (color) return color;
    }

    return null;
  }

  // Fonction pour trouver la couleur GTA la plus proche d'une valeur RGB

  // Fonction pour initialiser le canvas du sélecteur de couleur (modifiée)
  function initColorPickerCanvas(type) {
    // Au lieu d'un canvas, nous utilisons directement l'aperçu de couleur
    const previewDiv = $(`#${type}-preview`);

    // Si vehicleData est défini et a une couleur pour ce type, l'utiliser comme couleur initiale
    let initialRGB = [255, 0, 0];
    let initialColorId;

    if (type === "primary" && vehicleData.primaryColor !== undefined) {
      initialColorId = vehicleData.primaryColor;
      const colorObj = findGTAColorById(initialColorId);
      if (colorObj) {
        initialRGB = hexToRgb(colorObj.color);
      }
    } else if (
      type === "secondary" &&
      vehicleData.secondaryColor !== undefined
    ) {
      initialColorId = vehicleData.secondaryColor;
      const colorObj = findGTAColorById(initialColorId);
      if (colorObj) {
        initialRGB = hexToRgb(colorObj.color);
      }
    }

    // Mettre à jour la couleur d'aperçu initiale
    previewDiv.css(
      "background-color",
      `rgb(${initialRGB[0]}, ${initialRGB[1]}, ${initialRGB[2]})`
    );

    // Convertir en HSB pour initialiser le slider de teinte
    const hsb = rgbToHsb(initialRGB[0], initialRGB[1], initialRGB[2]);

    // Mettre à jour le slider de teinte
    $(`#${type}-hue-slider`).val(hsb[0]);

    // Mettre à jour les valeurs RGB et HSB
    updateRGBInputs(type, initialRGB[0], initialRGB[1], initialRGB[2]);

    // Ajouter l'événement de clic sur l'aperçu
    previewDiv.on("click", function () {
      // Ouvrir le sélecteur de couleur personnalisée quand on clique sur l'aperçu
      $(`.color-tab[data-tab="custom"][data-target="${type}"]`).click();
    });

    // Initialiser le slider de teinte
    $(`#${type}-hue-slider`).on("input", function () {
      const hue = parseInt($(this).val());

      // Mettre à jour la valeur H
      $(`#${type}-h-value`).val(hue);

      // Récupérer les valeurs S et B actuelles
      const s = parseInt($(`#${type}-s-value`).val());
      const b = parseInt($(`#${type}-b-value`).val());

      // Convertir en RGB et mettre à jour
      const newRGB = hsbToRgb(hue, s, b);
      updateRGBInputs(type, newRGB[0], newRGB[1], newRGB[2]);

      // Mettre à jour l'aperçu
      $(`#${type}-preview`).css(
        "background-color",
        `rgb(${newRGB[0]}, ${newRGB[1]}, ${newRGB[2]})`
      );
    });
  }

  function setupColorPickers() {
    ["primary", "secondary"].forEach((type) => {
      // Mettre à jour les valeurs quand les sliders RGB changent
      $(`#${type}-r-slider, #${type}-g-slider, #${type}-b-slider`).on(
        "input",
        function () {
          const r = parseInt($(`#${type}-r-slider`).val());
          const g = parseInt($(`#${type}-g-slider`).val());
          const b = parseInt($(`#${type}-b-slider`).val());

          $(`#${type}-r-value`).text(r);
          $(`#${type}-g-value`).text(g);
          $(`#${type}-b-value`).text(b);

          // Mettre à jour hex
          const hex = rgbToHex(r, g, b);
          $(`#${type}-hex-value`).val(hex);

          // Convertir en HSB et mettre à jour
          const hsb = rgbToHsb(r, g, b);
          $(`#${type}-h-value`).val(hsb[0]);
          $(`#${type}-s-value`).val(hsb[1]);
          $(`#${type}-b-value`).val(hsb[2]);

          // Mettre à jour l'aperçu
          $(`#${type}-preview`).css("background-color", `rgb(${r},${g},${b})`);

          // Appliquer après un délai (prévisualisation en direct)
          clearTimeout(window[`${type}ColorTimeout`]);
          window[`${type}ColorTimeout`] = setTimeout(() => {
            const closestColor = findClosestGTAColor(r, g, b);
            applyModification(`${type}Color`, closestColor.id);

            // Mettre à jour l'interface
            $(`.color-item[data-type='${type}']`).removeClass("active");
            $(
              `.color-item[data-type='${type}'][data-color='${closestColor.id}']`
            ).addClass("active");
          }, 300);
        }
      );
    });
  }

  // Fonction pour générer la section peinture avec boutons de couleurs normales/personnalisées
  function generatePaintSection() {
    const paintSection = $("#paint-section");
    paintSection.empty();

    // Récupérer les valeurs actuelles du véhicule
    const currentPrimaryColor = vehicleData.primaryColor;
    const currentSecondaryColor = vehicleData.secondaryColor;
    const currentPearlColor = vehicleData.pearlColor;
    const currentPaintType =
      vehicleData.paintType !== undefined ? parseInt(vehicleData.paintType) : 0;

    // Initialiser les variables globales
    window.selectedPrimaryColor = currentPrimaryColor;
    window.selectedSecondaryColor = currentSecondaryColor;
    window.selectedPearlColor = currentPearlColor;
    window.currentPaintType = currentPaintType;

    // Section type de peinture
    paintSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Type de peinture</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="paint-type-content">
        <div class="paint-type-grid">
          <div class="paint-type-item ${
            currentPaintType === 0 ? "active" : ""
          }" data-type="0">
            <div class="paint-type-name">Normal</div>
            <div class="paint-type-price">$500</div>
          </div>
          <div class="paint-type-item ${
            currentPaintType === 1 ? "active" : ""
          }" data-type="1">
            <div class="paint-type-name">Métallique</div>
            <div class="paint-type-price">$700</div>
          </div>
          <div class="paint-type-item ${
            currentPaintType === 2 ? "active" : ""
          }" data-type="2">
            <div class="paint-type-name">Nacré</div>
            <div class="paint-type-price">$1000</div>
          </div>
          <div class="paint-type-item ${
            currentPaintType === 3 ? "active" : ""
          }" data-type="3">
            <div class="paint-type-name">Mat</div>
            <div class="paint-type-price">$900</div>
          </div>
          <div class="paint-type-item ${
            currentPaintType === 4 ? "active" : ""
          }" data-type="4">
            <div class="paint-type-name">Métal brossé</div>
            <div class="paint-type-price">$1200</div>
          </div>
          <div class="paint-type-item ${
            currentPaintType === 5 ? "active" : ""
          }" data-type="5">
            <div class="paint-type-name">Chrome</div>
            <div class="paint-type-price">$1500</div>
          </div>
        </div>
      </div>
    </div>
  `);

    // Section couleur primaire
    paintSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Couleur primaire</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="primary-content">
        <div class="color-tabs">
          <div class="color-tab active" data-tab="simple" data-target="primary">Couleurs prédéfinies</div>
          <div class="color-tab" data-tab="custom" data-target="primary">Couleur personnalisée</div>
        </div>
        
        <div id="primary-simple-content">
          <div class="color-grid primary-colors"></div>
        </div>
        
        <div id="primary-custom-content" style="display: none;">
          <div class="color-preview" id="primary-preview"></div>
          
          <div class="rgb-sliders">
            <div class="rgb-slider">
              <span>R</span>
              <input type="range" min="0" max="255" value="255" id="primary-r-slider">
              <span id="primary-r-value">255</span>
            </div>
            <div class="rgb-slider">
              <span>G</span>
              <input type="range" min="0" max="255" value="0" id="primary-g-slider">
              <span id="primary-g-value">0</span>
            </div>
            <div class="rgb-slider">
              <span>B</span>
              <input type="range" min="0" max="255" value="0" id="primary-b-slider">
              <span id="primary-b-value">0</span>
            </div>
          </div>
          
          <div class="color-picker-values">
            <div class="color-input">
              <span>HEX</span>
              <input type="text" id="primary-hex-value" value="#FF0000">
            </div>
            <div class="color-input">
              <span>H</span>
              <input type="number" min="0" max="360" id="primary-h-value" value="0">
            </div>
            <div class="color-input">
              <span>S</span>
              <input type="number" min="0" max="100" id="primary-s-value" value="100">
            </div>
            <div class="color-input">
              <span>B</span>
              <input type="number" min="0" max="100" id="primary-b-value" value="100">
            </div>
          </div>
          
          <div class="gradient-slider">
            <input type="range" min="0" max="360" value="0" id="primary-hue-slider">
          </div>
          
          <button class="apply-color-btn" id="apply-primary-color">Appliquer</button>
        </div>
      </div>
    </div>
  `);

    // Section couleur secondaire
    paintSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Couleur secondaire</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="secondary-content">
        <div class="color-tabs">
          <div class="color-tab active" data-tab="simple" data-target="secondary">Couleurs prédéfinies</div>
          <div class="color-tab" data-tab="custom" data-target="secondary">Couleur personnalisée</div>
        </div>
        
        <div id="secondary-simple-content">
          <div class="color-grid secondary-colors"></div>
        </div>
        
        <div id="secondary-custom-content" style="display: none;">
          <div class="color-preview" id="secondary-preview"></div>
          
          <div class="rgb-sliders">
            <div class="rgb-slider">
              <span>R</span>
              <input type="range" min="0" max="255" value="255" id="secondary-r-slider">
              <span id="secondary-r-value">255</span>
            </div>
            <div class="rgb-slider">
              <span>G</span>
              <input type="range" min="0" max="255" value="0" id="secondary-g-slider">
              <span id="secondary-g-value">0</span>
            </div>
            <div class="rgb-slider">
              <span>B</span>
              <input type="range" min="0" max="255" value="0" id="secondary-b-slider">
              <span id="secondary-b-value">0</span>
            </div>
          </div>
          
          <div class="color-picker-values">
            <div class="color-input">
              <span>HEX</span>
              <input type="text" id="secondary-hex-value" value="#FF0000">
            </div>
            <div class="color-input">
              <span>H</span>
              <input type="number" min="0" max="360" id="secondary-h-value" value="0">
            </div>
            <div class="color-input">
              <span>S</span>
              <input type="number" min="0" max="100" id="secondary-s-value" value="100">
            </div>
            <div class="color-input">
              <span>B</span>
              <input type="number" min="0" max="100" id="secondary-b-value" value="100">
            </div>
          </div>
          
          <div class="gradient-slider">
            <input type="range" min="0" max="360" value="0" id="secondary-hue-slider">
          </div>
          
          <button class="apply-color-btn" id="apply-secondary-color">Appliquer</button>
        </div>
      </div>
    </div>
  `);

    // Section couleur nacrée (seulement visible si type est métallique ou nacré)
    const showPearl = currentPaintType === 1 || currentPaintType === 2;
    paintSection.append(`
    <div class="color-section" id="pearl-section" style="${
      showPearl ? "" : "display: none;"
    }">
      <div class="color-section-header">
        <div class="color-title">Couleur nacrée</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="pearl-content">
        <div class="color-tabs">
          <div class="color-tab active" data-tab="simple" data-target="pearl">Couleurs prédéfinies</div>
          <div class="color-tab" data-tab="custom" data-target="pearl">Couleur personnalisée</div>
        </div>
        
        <div id="pearl-simple-content">
          <div class="color-grid pearl-colors"></div>
        </div>
        
        <div id="pearl-custom-content" style="display: none;">
          <div class="color-preview" id="pearl-preview"></div>
          
          <div class="rgb-sliders">
            <div class="rgb-slider">
              <span>R</span>
              <input type="range" min="0" max="255" value="255" id="pearl-r-slider">
              <span id="pearl-r-value">255</span>
            </div>
            <div class="rgb-slider">
              <span>G</span>
              <input type="range" min="0" max="255" value="0" id="pearl-g-slider">
              <span id="pearl-g-value">0</span>
            </div>
            <div class="rgb-slider">
              <span>B</span>
              <input type="range" min="0" max="255" value="0" id="pearl-b-slider">
              <span id="pearl-b-value">0</span>
            </div>
          </div>
          
          <div class="color-picker-values">
            <div class="color-input">
              <span>HEX</span>
              <input type="text" id="pearl-hex-value" value="#FF0000">
            </div>
            <div class="color-input">
              <span>H</span>
              <input type="number" min="0" max="360" id="pearl-h-value" value="0">
            </div>
            <div class="color-input">
              <span>S</span>
              <input type="number" min="0" max="100" id="pearl-s-value" value="100">
            </div>
            <div class="color-input">
              <span>B</span>
              <input type="number" min="0" max="100" id="pearl-b-value" value="100">
            </div>
          </div>
          
          <div class="gradient-slider">
            <input type="range" min="0" max="360" value="0" id="pearl-hue-slider">
          </div>
          
          <button class="apply-color-btn" id="apply-pearl-color">Appliquer</button>
        </div>
      </div>
    </div>
  `);

    // Générer les palettes de couleurs avec le type de peinture actuel
    console.log(
      "Génération initiale des palettes avec currentPaintType =",
      currentPaintType
    );
    generateColorPalette("primary", currentPrimaryColor, currentPaintType);
    generateColorPalette("secondary", currentSecondaryColor, currentPaintType);

    // La couleur nacrée utilise toujours les couleurs standard/métalliques
    if (showPearl) {
      generateColorPalette("pearl", currentPearlColor, 1); // Force type métallique pour nacrée
    }

    // Initialiser les couleurs pour les prévisualisations personnalisées
    initColorPreview("primary", currentPrimaryColor);
    initColorPreview("secondary", currentSecondaryColor);
    if (showPearl) {
      initColorPreview("pearl", currentPearlColor);
    }

    // Gestionnaire pour les types de peinture
    $(".paint-type-item")
      .off("click")
      .on("click", function () {
        $(".paint-type-item").removeClass("active");
        $(this).addClass("active");
        const paintType = parseInt($(this).data("type"));
        window.currentPaintType = paintType;

        // Gérer la visibilité de la section nacrée
        if (paintType === 1 || paintType === 2) {
          $("#pearl-section").slideDown(200);
          generateColorPalette(
            "pearl",
            window.selectedPearlColor || currentPearlColor,
            1
          );

          // Initialiser la prévisualisation si elle n'était pas visible avant
          if (!showPearl) {
            initColorPreview("pearl", currentPearlColor);
          }
        } else {
          $("#pearl-section").slideUp(200);
        }

        // Appliquer le type de peinture
        console.log("Changement de type de peinture vers", paintType);
        applyModification("paintType", paintType);

        // Mettre à jour les palettes de couleurs selon le type
        generateColorPalette(
          "primary",
          window.selectedPrimaryColor || currentPrimaryColor,
          paintType
        );
        generateColorPalette(
          "secondary",
          window.selectedSecondaryColor || currentSecondaryColor,
          paintType
        );

        // Message informatif
        const paintTypeName = $(this).find(".paint-type-name").text();
        showNotification(`Type de peinture: ${paintTypeName}`);
      });

    // Configurer les boutons des onglets de couleur
    setupColorTabs();

    // Configurer les prévisualisations et contrôles RGB pour les couleurs personnalisées
    setLiveColorPreview("primary");
    setLiveColorPreview("secondary");
    if (showPearl) {
      setLiveColorPreview("pearl");
    }

    // Configurer les boutons d'application des couleurs personnalisées
    $("#apply-primary-color").click(function () {
      const r = parseInt($("#primary-r-slider").val());
      const g = parseInt($("#primary-g-slider").val());
      const b = parseInt($("#primary-b-slider").val());
      const closestColor = findClosestGTAColor(
        r,
        g,
        b,
        window.currentPaintType
      );

      applyModification("primaryColor", closestColor.id);
      window.selectedPrimaryColor = closestColor.id;

      // Mettre à jour l'interface
      $(".color-item[data-type='primary']").removeClass("active");
      $(
        `.color-item[data-type='primary'][data-color='${closestColor.id}']`
      ).addClass("active");

      // Notification
      showNotification(
        `Couleur personnalisée appliquée (proche de ${closestColor.name})`
      );
    });

    $("#apply-secondary-color").click(function () {
      const r = parseInt($("#secondary-r-slider").val());
      const g = parseInt($("#secondary-g-slider").val());
      const b = parseInt($("#secondary-b-slider").val());
      const closestColor = findClosestGTAColor(
        r,
        g,
        b,
        window.currentPaintType
      );

      applyModification("secondaryColor", closestColor.id);
      window.selectedSecondaryColor = closestColor.id;

      // Mettre à jour l'interface
      $(".color-item[data-type='secondary']").removeClass("active");
      $(
        `.color-item[data-type='secondary'][data-color='${closestColor.id}']`
      ).addClass("active");

      // Notification
      showNotification(
        `Couleur personnalisée appliquée (proche de ${closestColor.name})`
      );
    });

    $("#apply-pearl-color").click(function () {
      const r = parseInt($("#pearl-r-slider").val());
      const g = parseInt($("#pearl-g-slider").val());
      const b = parseInt($("#pearl-b-slider").val());
      const closestColor = findClosestGTAColor(r, g, b, 1); // Toujours type 1 pour nacré

      applyModification("pearlColor", closestColor.id);
      window.selectedPearlColor = closestColor.id;

      // Mettre à jour l'interface
      $(".color-item[data-type='pearl']").removeClass("active");
      $(
        `.color-item[data-type='pearl'][data-color='${closestColor.id}']`
      ).addClass("active");

      // Notification
      showNotification(
        `Couleur nacrée personnalisée appliquée (proche de ${closestColor.name})`
      );
    });

    // Par défaut, toutes les sections sont ouvertes
    $(".color-section").attr("data-expanded", "true");

    // Configurer les boutons d'expansion
    setupColorExpandButtons();
  }

  // Fonction pour initialiser la prévisualisation de couleur
  function initColorPreview(type, colorId) {
    // Trouver la couleur correspondante
    const colorObj = findGTAColorById(colorId);
    if (!colorObj) return;

    // Convertir en RGB
    const rgb = hexToRgb(colorObj.color);
    if (!rgb) return;

    // Mettre à jour la prévisualisation
    $(`#${type}-preview`).css("background-color", colorObj.color);

    // Mettre à jour les sliders
    $(`#${type}-r-slider`).val(rgb[0]);
    $(`#${type}-g-slider`).val(rgb[1]);
    $(`#${type}-b-slider`).val(rgb[2]);

    // Mettre à jour les valeurs
    $(`#${type}-r-value`).text(rgb[0]);
    $(`#${type}-g-value`).text(rgb[1]);
    $(`#${type}-b-value`).text(rgb[2]);

    // Mettre à jour la valeur hex
    $(`#${type}-hex-value`).val(colorObj.color);

    // Convertir en HSB et mettre à jour
    const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
    $(`#${type}-h-value`).val(hsb[0]);
    $(`#${type}-s-value`).val(hsb[1]);
    $(`#${type}-b-value`).val(hsb[2]);

    // Mettre à jour le slider de teinte
    $(`#${type}-hue-slider`).val(hsb[0]);
  }

  // Fonction pour configuration des onglets de couleur
  function setupColorTabs() {
    $(".color-tab")
      .off("click")
      .on("click", function () {
        const tabType = $(this).data("tab");
        const target = $(this).data("target");
        const section = $(this).closest(".color-section");

        // Mettre à jour les onglets
        section.find(".color-tab").removeClass("active");
        $(this).addClass("active");

        // Afficher le contenu approprié
        if (tabType === "simple") {
          $(`#${target}-simple-content`).show();
          $(`#${target}-custom-content`).hide();
        } else {
          $(`#${target}-simple-content`).hide();
          $(`#${target}-custom-content`).show();
        }
      });
  }

  // Fonction pour trouver la couleur GTA la plus proche d'une valeur RGB
  function findClosestGTAColor(r, g, b, paintType) {
    // Déterminer quelle collection utiliser en fonction du type de peinture
    let colorsToCheck = [];

    paintType = parseInt(paintType || 0);

    switch (paintType) {
      case 0: // Normal
        colorsToCheck = window.vehicleColors.standard;
        break;
      case 1: // Métallique
      case 2: // Nacré
        colorsToCheck = window.vehicleColors.metallic;
        break;
      case 3: // Mat
        colorsToCheck = window.vehicleColors.matte;
        break;
      case 4: // Metal/Brossé
        colorsToCheck = window.vehicleColors.metal;
        break;
      case 5: // Chrome
        return { id: 120, name: "Chrome", color: "#DBDBDB" };
      default:
        colorsToCheck = window.vehicleColors.standard;
    }

    let closestColor = colorsToCheck[0];
    let minDistance = Number.MAX_VALUE;

    for (const color of colorsToCheck) {
      const colorRgb = hexToRgb(color.color);

      // Calculer la distance de couleur (formule pondérée)
      const rDiff = r - colorRgb[0];
      const gDiff = g - colorRgb[1];
      const bDiff = b - colorRgb[2];

      const distance = Math.sqrt(
        rDiff * rDiff * 0.299 + gDiff * gDiff * 0.587 + bDiff * bDiff * 0.114
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }

    return closestColor;
  }

  // Fonction pour configurer la prévisualisation en direct des couleurs
  function setLiveColorPreview(type) {
    // Ajouter un div d'aperçu s'il n'existe pas déjà
    if ($(`#${type}-preview`).length === 0) {
      $(`#${type}-custom-content`).prepend(
        `<div id="${type}-preview" class="color-preview"></div>`
      );
    }

    // Mettre à jour l'aperçu à chaque changement de slider
    $(`#${type}-r-slider, #${type}-g-slider, #${type}-b-slider`)
      .off("input")
      .on("input", function () {
        const r = parseInt($(`#${type}-r-slider`).val());
        const g = parseInt($(`#${type}-g-slider`).val());
        const b = parseInt($(`#${type}-b-slider`).val());

        // Mettre à jour l'aperçu
        $(`#${type}-preview`).css("background-color", `rgb(${r},${g},${b})`);
        $(`#${type}-preview`).addClass("color-changed");
        setTimeout(
          () => $(`#${type}-preview`).removeClass("color-changed"),
          300
        );

        // Mettre à jour les valeurs RGB affichées
        $(`#${type}-r-value`).text(r);
        $(`#${type}-g-value`).text(g);
        $(`#${type}-b-value`).text(b);

        // Mettre à jour la valeur hexadécimale
        const hex = rgbToHex(r, g, b);
        $(`#${type}-hex-value`).val(hex);

        // Convertir RGB en HSB et mettre à jour les valeurs HSB
        const hsb = rgbToHsb(r, g, b);
        $(`#${type}-h-value`).val(hsb[0]);
        $(`#${type}-s-value`).val(hsb[1]);
        $(`#${type}-b-value`).val(hsb[2]);

        // Mettre à jour le slider de teinte
        $(`#${type}-hue-slider`).val(hsb[0]);
      });

    // Mise à jour du slider de teinte
    $(`#${type}-hue-slider`)
      .off("input")
      .on("input", function () {
        const hue = parseInt($(this).val());

        // Mettre à jour la valeur H
        $(`#${type}-h-value`).val(hue);

        // Récupérer les valeurs S et B actuelles
        const s = parseInt($(`#${type}-s-value`).val() || 100);
        const v = parseInt($(`#${type}-b-value`).val() || 100);

        // Convertir HSB en RGB
        const rgb = hsbToRgb(hue, s, v);

        // Mettre à jour les sliders RGB et les valeurs
        $(`#${type}-r-slider`).val(rgb[0]);
        $(`#${type}-g-slider`).val(rgb[1]);
        $(`#${type}-b-slider`).val(rgb[2]);

        $(`#${type}-r-value`).text(rgb[0]);
        $(`#${type}-g-value`).text(rgb[1]);
        $(`#${type}-b-value`).text(rgb[2]);

        // Mettre à jour l'hex
        const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
        $(`#${type}-hex-value`).val(hex);

        // Mettre à jour l'aperçu
        $(`#${type}-preview`).css(
          "background-color",
          `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
        );
      });

    // Mise à jour des champs HSB
    $(`#${type}-h-value, #${type}-s-value, #${type}-b-value`)
      .off("change input")
      .on("change input", function () {
        const h = parseInt($(`#${type}-h-value`).val() || 0);
        const s = parseInt($(`#${type}-s-value`).val() || 100);
        const v = parseInt($(`#${type}-b-value`).val() || 100);

        // Convertir HSB en RGB
        const rgb = hsbToRgb(h, s, v);

        // Mettre à jour les sliders RGB et les valeurs
        $(`#${type}-r-slider`).val(rgb[0]);
        $(`#${type}-g-slider`).val(rgb[1]);
        $(`#${type}-b-slider`).val(rgb[2]);

        $(`#${type}-r-value`).text(rgb[0]);
        $(`#${type}-g-value`).text(rgb[1]);
        $(`#${type}-b-value`).text(rgb[2]);

        // Mettre à jour l'hex
        const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
        $(`#${type}-hex-value`).val(hex);

        // Mettre à jour le slider de teinte
        $(`#${type}-hue-slider`).val(h);

        // Mettre à jour l'aperçu
        $(`#${type}-preview`).css(
          "background-color",
          `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
        );
      });

    // Mise à jour du champ hex
    $(`#${type}-hex-value`)
      .off("change input")
      .on("change input", function () {
        const hex = $(this).val();
        if (/^#[0-9A-F]{6}$/i.test(hex)) {
          const rgb = hexToRgb(hex);

          // Mettre à jour les sliders
          $(`#${type}-r-slider`).val(rgb[0]);
          $(`#${type}-g-slider`).val(rgb[1]);
          $(`#${type}-b-slider`).val(rgb[2]);

          // Mettre à jour les valeurs
          $(`#${type}-r-value`).text(rgb[0]);
          $(`#${type}-g-value`).text(rgb[1]);
          $(`#${type}-b-value`).text(rgb[2]);

          // Mettre à jour l'aperçu
          $(`#${type}-preview`).css(
            "background-color",
            `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
          );

          // Mise à jour des valeurs HSB pour garder tout en synchronisation
          const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
          $(`#${type}-h-value`).val(hsb[0]);
          $(`#${type}-s-value`).val(hsb[1]);
          $(`#${type}-b-value`).val(hsb[2]);

          // Mettre à jour le slider de teinte
          $(`#${type}-hue-slider`).val(hsb[0]);
        }
      });
  }

  // Fonction pour générer la palette de couleurs
  function generateColorPalette(type, activeColorId, paintType) {
    console.log(
      `Génération palette ${type} avec paintType=${paintType} et activeColorId=${activeColorId}`
    );

    const grid = $(`.${type}-colors`);
    grid.empty();

    // Déterminer quelles couleurs afficher en fonction du type de peinture
    const paintTypeInt = parseInt(paintType || 0);
    let colorsToUse = [];

    // Utiliser la structure window.vehicleColors
    switch (paintTypeInt) {
      case 0: // Normal
        colorsToUse = window.vehicleColors.standard;
        break;
      case 1: // Métallique
      case 2: // Nacré
        colorsToUse = window.vehicleColors.metallic;
        break;
      case 3: // Mat
        colorsToUse = window.vehicleColors.matte;
        break;
      case 4: // Metal/Brossé
        colorsToUse = window.vehicleColors.metal;
        break;
      case 5: // Chrome
        colorsToUse = [{ id: 120, name: "Chrome", color: "#e6e6e6" }];
        break;
      default:
        colorsToUse = window.vehicleColors.standard;
    }

    console.log(
      `Affichage de ${colorsToUse.length} couleurs pour le type ${type} (paintType: ${paintTypeInt})`
    );

    // Générer les carrés de couleur
    colorsToUse.forEach((color) => {
      const colorItem = $(`
          <div class="color-item" 
              style="background-color: ${color.color}" 
              data-color="${color.id}" 
              data-type="${type}" 
              title="${color.name}"></div>
      `);

      // Déterminer si la couleur est active
      if (
        activeColorId !== undefined &&
        parseInt(color.id) === parseInt(activeColorId)
      ) {
        colorItem.addClass("active");

        // Mettre à jour l'aperçu du sélecteur de couleur personnalisée
        initColorPreview(type, color.id);
      }

      // Gestionnaire d'événements pour la sélection de couleur
      colorItem.on("click", function () {
        $(`.color-item[data-type='${type}']`).removeClass("active selected");
        $(this).addClass("active selected");

        // Stockage de la couleur sélectionnée pour une application ultérieure
        const colorId = parseInt($(this).data("color"));

        if (type === "primary") {
          window.selectedPrimaryColor = colorId;
        } else if (type === "secondary") {
          window.selectedSecondaryColor = colorId;
        } else if (type === "pearl") {
          window.selectedPearlColor = colorId;
        }

        // Application immédiate de la couleur
        const colorType =
          type === "primary"
            ? "primaryColor"
            : type === "secondary"
            ? "secondaryColor"
            : "pearlColor";
        applyModification(colorType, colorId);

        // Mise à jour de l'aperçu du sélecteur de couleur personnalisée
        initColorPreview(type, colorId);

        // Notification
        showNotification(`Couleur ${color.name} appliquée`);
      });

      grid.append(colorItem);
    });
  }

  function initializeColorMenu() {
    // Détecter le type de peinture actuel
    const currentPaintType =
      vehicleData.paintType !== undefined ? parseInt(vehicleData.paintType) : 0;

    // Sélectionner le bon type de peinture dans l'interface
    $(`.paint-type-item[data-type="${currentPaintType}"]`).addClass("active");

    // Gérer la visibilité de la section nacrée
    if (currentPaintType === 1 || currentPaintType === 2) {
      $("#pearl-section").show();
    } else {
      $("#pearl-section").hide();
    }

    // Générer les palettes de couleurs
    generateColorPalette("primary", vehicleData.primaryColor, currentPaintType);
    generateColorPalette(
      "secondary",
      vehicleData.secondaryColor,
      currentPaintType
    );
    generateColorPalette("pearl", vehicleData.pearlColor, 1); // Force type métallique pour nacrée

    console.log(
      "Menu des couleurs initialisé avec type de peinture:",
      currentPaintType
    );
  }

  $("#color-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des couleurs
    $("#color-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#color-btn").addClass("active");
    // Générer l'UI des couleurs
    generateColorUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "color",
      })
    );
  });

  function setupColorTabs() {
    $(".color-tab")
      .off("click")
      .on("click", function () {
        const tabType = $(this).data("tab");
        const target = $(this).data("target");
        const section = $(this).closest(".color-section");

        // Mettre à jour les onglets
        section.find(".color-tab").removeClass("active");
        $(this).addClass("active");

        // Afficher le contenu approprié
        if (tabType === "simple") {
          $(`#${target}-simple-content`).show();
          $(`#${target}-custom-content`).hide();
        } else {
          $(`#${target}-simple-content`).hide();
          $(`#${target}-custom-content`).show();
        }
      });
  }
  // Ajouter cette ligne dans generatePaintSection() juste avant setupColorExpandButtons();
  function initializePaintSections() {
    // Définir l'état initial de toutes les sections
    $(".color-section").each(function () {
      $(this).attr("data-expanded", "true");
    });

    // Vérifier l'état des onglets et s'assurer que seul le contenu pertinent est visible
    $(".color-tab.active").each(function () {
      const tabType = $(this).data("tab");
      const target = $(this).data("target");

      if (tabType === "simple") {
        $(`#${target}-custom-content`).hide();
        $(`#${target}-simple-content`).show();
      } else {
        $(`#${target}-simple-content`).hide();
        $(`#${target}-custom-content`).show();
      }
    });

    // Appliquer les gestionnaires d'événements
    setupColorTabs();
    setupColorExpandButtons();
  }

  function updateColorValues(type, r, g, b) {
    // Mettre à jour les valeurs RGB affichées
    $(`#${type}-r-value`).text(r);
    $(`#${type}-g-value`).text(g);
    $(`#${type}-b-value`).text(b);

    // Mettre à jour la valeur hexadécimale
    const hex = rgbToHex(r, g, b);
    $(`#${type}-hex-value`).val(hex);

    // Convertir RGB en HSB et mettre à jour les valeurs HSB
    const hsb = rgbToHsb(r, g, b);
    $(`#${type}-h-value`).val(hsb[0]);
    $(`#${type}-s-value`).val(hsb[1]);
    $(`#${type}-b-value`).val(hsb[2]);

    // Mettre à jour le slider de teinte
    $(`#${type}-hue-slider`).val(hsb[0]);
  }

  // Assurons-nous que vehicleColors est bien défini globalement

  function setupColorExpandButtons() {
    $(".color-expand-btn")
      .off("click")
      .on("click", function () {
        const section = $(this).closest(".color-section");
        const content = section.find(".color-content");
        const isExpanded = section.attr("data-expanded") === "true";

        if (isExpanded) {
          content.slideUp(200);
          section.attr("data-expanded", "false");
          $(this).html('<i class="fas fa-chevron-down"></i>');
        } else {
          content.slideDown(200);
          section.attr("data-expanded", "true");
          $(this).html('<i class="fas fa-chevron-up"></i>');
        }
      });
  }

  // Fonction UI de couleurs principale
  function generateColorUI() {
    const colorContainer = $("#color-container");
    colorContainer.empty();

    // Barre d'onglets supérieure pour les différentes sections
    colorContainer.append(`
      <div class="top-icons-bar">
          <div class="icon-btn active" data-section="paint">
              <i class="fas fa-palette"></i>
              <span>Peinture</span>
          </div>
          <div class="icon-btn" data-section="headlights">
              <i class="fas fa-lightbulb"></i>
              <span>Phares</span>
          </div>
          <div class="icon-btn" data-section="neon">
              <i class="fas fa-bolt"></i>
              <span>Néons</span>
          </div>
          <div class="icon-btn" data-section="windows">
              <i class="fas fa-car-side"></i>
              <span>Vitres</span>
          </div>
      </div>
  `);

    // Génération des différentes sections
    colorContainer.append(
      `<div id="paint-section" class="section-content"></div>`
    );
    colorContainer.append(
      `<div id="headlights-section" class="section-content" style="display: none;"></div>`
    );
    colorContainer.append(
      `<div id="neon-section" class="section-content" style="display: none;"></div>`
    );
    colorContainer.append(
      `<div id="windows-section" class="section-content" style="display: none;"></div>`
    );

    // Générer le contenu des sections
    generatePaintSection();

    // Si les autres fonctions existent, les appeler aussi
    if (typeof generateHeadlightsSection === "function")
      generateHeadlightsSection();
    if (typeof generateNeonSection === "function") generateNeonSection();
    if (typeof generateWindowsSection === "function") generateWindowsSection();

    // Gestionnaire d'événements pour les onglets supérieurs
    $(".icon-btn")
      .off("click")
      .on("click", function () {
        $(".icon-btn").removeClass("active");
        $(this).addClass("active");

        const section = $(this).data("section");
        $(".section-content").hide();
        $(`#${section}-section`).show();
      });
  }

  // Bouton pour ouvrir le menu des couleurs (suite)
  $("#color-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des couleurs
    $("#color-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#color-btn").addClass("active");
    // Générer l'UI des couleurs
    generateColorUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "color",
      })
    );
  });

  // Fonction pour générer la section des phares
// Fonction pour générer la section des phares avec les vraies couleurs xenon de GTA
function generateHeadlightsSection() {
  const headlightsSection = $("#headlights-section");
  headlightsSection.empty();
  
  // Section xenon
  headlightsSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Phares Xenon</div>
      </div>
      
      <div class="color-content">
        <div class="extra-toggle">
          <div class="extra-toggle-btn ${vehicleData.xenonEnabled ? 'active' : ''}" id="xenon-main-toggle"></div>
          <div class="extra-toggle-label">Activer les phares xenon</div>
        </div>
      </div>
    </div>
  `);
  
  // Définir les vraies couleurs xenon de GTA V
  const xenonColors = [
    { id: -1, name: "Défaut", color: "#ffffff", desc: "Blanc standard" },
    { id: 0, name: "Blanc", color: "#ffffff", desc: "Blanc pur" },
    { id: 1, name: "Bleu", color: "#2794ff", desc: "Bleu glacier" },
    { id: 2, name: "Bleu Électrique", color: "#0a98ff", desc: "Bleu électrique" },
    { id: 3, name: "Vert Menthe", color: "#37d882", desc: "Vert menthe" },
    { id: 4, name: "Vert Lime", color: "#8bfe42", desc: "Vert citron" },
    { id: 5, name: "Jaune", color: "#feff02", desc: "Jaune vif" },
    { id: 6, name: "Or", color: "#ffda36", desc: "Doré" },
    { id: 7, name: "Orange", color: "#ff9c0c", desc: "Orange" },
    { id: 8, name: "Rouge", color: "#ff2f2f", desc: "Rouge vif" },
    { id: 9, name: "Rose", color: "#ff4dff", desc: "Rose pétant" },
    { id: 10, name: "Violet", color: "#9a46ff", desc: "Violet" },
    { id: 11, name: "Noir", color: "#212121", desc: "Noir teinté (atténué)" },
    { id: 12, name: "Bleu Clair", color: "#579bff", desc: "Bleu ciel" }
  ];
  
  // Couleurs des phares xenon
  headlightsSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Couleur des phares</div>
      </div>
      
      <div class="color-content">
        <div class="xenon-colors-grid">
          ${xenonColors.map(color => `
            <div class="color-item xenon-color ${vehicleData.xenonColor === color.id ? 'active' : ''}" 
                 data-color="${color.id}" 
                 style="background-color: ${color.color}" 
                 title="${color.desc}">
              <span>${color.name}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `);
  
  // Gestionnaires d'événements
  $("#xenon-main-toggle").on("click", function() {
    const isActive = $(this).hasClass("active");
    if (isActive) {
      $(this).removeClass("active");
      applyModification("xenon", 0);
      showNotification("Phares xenon désactivés");
    } else {
      $(this).addClass("active");
      applyModification("xenon", 1);
      showNotification("Phares xenon activés");
    }
  });
  
  $(".xenon-color").on("click", function() {
    $(".xenon-color").removeClass("active selected");
    $(this).addClass("active selected");
    
    const colorId = parseInt($(this).data("color"));
    
    // Appliquer la couleur
    applyModification("xenonColor", colorId);
    
    // Activer les xenons si pas déjà actifs
    if (!$("#xenon-main-toggle").hasClass("active")) {
      $("#xenon-main-toggle").addClass("active");
      applyModification("xenon", 1);
    }
    
    // Notification
    const colorName = $(this).find("span").text();
    showNotification(`Couleur de xenon: ${colorName}`);
  });
}

// Ajoutez ce CSS pour améliorer l'apparence des couleurs xenon
const xenonCSS = `
.xenon-colors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

.xenon-color {
  position: relative;
  height: 60px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s ease;
  padding-bottom: 5px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
}

.xenon-color:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.xenon-color.active, .xenon-color.selected {
  border-color: #ffffff;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

.xenon-color span {
  position: relative;
  z-index: 2;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.9);
  font-weight: bold;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 3px;
}

/* Effets lumineux pour les couleurs xenon */
.xenon-color::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 20px;
  background: currentColor;
  filter: blur(15px);
  opacity: 0.8;
  border-radius: 50%;
}

.xenon-color::after {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 40%;
  height: 10px;
  background: white;
  filter: blur(5px);
  opacity: 0.6;
  border-radius: 50%;
}
`;

// Ajouter le CSS à la page
$('head').append(`<style>${xenonCSS}</style>`);

  // Fonction pour générer la section des vitres
  function generateWindowsSection() {
    const windowsSection = $("#windows-section");
    windowsSection.empty();

    // Teinte des vitres
    windowsSection.append(`
      <div class="color-section">
          <div class="color-section-header">
              <div class="color-title">Teinte des vitres</div>
          </div>
          
          <div class="color-content">
              <div class="tint-options-grid">
                  <div class="tint-option ${
                    vehicleData.windowTint === -1 ? "active" : ""
                  }" data-tint-id="-1">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Stock</div>
                          <div class="tint-price">$0</div>
                      </div>
                  </div>
                  <div class="tint-option ${
                    vehicleData.windowTint === 0 ? "active" : ""
                  }" data-tint-id="0">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Aucune</div>
                          <div class="tint-price">$100</div>
                      </div>
                  </div>
                  <div class="tint-option ${
                    vehicleData.windowTint === 1 ? "active" : ""
                  }" data-tint-id="1">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0.9)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Pure Black</div>
                          <div class="tint-price">$500</div>
                      </div>
                  </div>
                  <div class="tint-option ${
                    vehicleData.windowTint === 2 ? "active" : ""
                  }" data-tint-id="2">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0.75)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Dark Smoke</div>
                          <div class="tint-price">$400</div>
                      </div>
                  </div>
                  <div class="tint-option ${
                    vehicleData.windowTint === 3 ? "active" : ""
                  }" data-tint-id="3">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0.5)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Light Smoke</div>
                          <div class="tint-price">$300</div>
                      </div>
                  </div>
                  <div class="tint-option ${
                    vehicleData.windowTint === 4 ? "active" : ""
                  }" data-tint-id="4">
                      <div class="tint-preview" style="background-color: rgba(0, 0, 0, 0.85)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Limo</div>
                          <div class="tint-price">$600</div>
                      </div>
                  </div>
                  <div class="tint-option ${
                    vehicleData.windowTint === 5 ? "active" : ""
                  }" data-tint-id="5">
                      <div class="tint-preview" style="background-color: rgba(0, 100, 0, 0.5)"></div>
                      <div class="tint-info">
                          <div class="tint-name">Green</div>
                          <div class="tint-price">$300</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `);

    // Gestionnaires d'événements
    $(".tint-option").on("click", function () {
      $(".tint-option").removeClass("active selected");
      $(this).addClass("active selected");

      const tintId = parseInt($(this).data("tint-id"));

      // Appliquer la teinte
      applyModification("windowTint", tintId);

      // Notification
      const tintName = $(this).find(".tint-name").text();
      showNotification(`Teinte des vitres: ${tintName}`);
    });
  }

  // Fonction pour générer la section néons
// Fonction pour générer la section néons avec couleurs personnalisées (version corrigée)
function generateNeonSection() {
  const neonSection = $("#neon-section");
  neonSection.empty();
  
  // Activer/désactiver les néons
  neonSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Néons</div>
      </div>
      
      <div class="color-content">
        <div class="extra-toggle">
          <div class="extra-toggle-btn ${vehicleData.neonsEnabled ? 'active' : ''}" id="neon-main-toggle"></div>
          <div class="extra-toggle-label">Activer les néons</div>
        </div>
      </div>
    </div>
  `);
  
  // Position des néons
  neonSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Position des néons</div>
      </div>
      
      <div class="color-content">
        <div class="neon-positions">
          <div class="extra-toggle">
            <div class="extra-toggle-btn ${vehicleData.neonPositions && vehicleData.neonPositions[0] ? 'active' : ''}" data-position="0" id="neon-pos-0"></div>
            <div class="extra-toggle-label">Néon avant</div>
          </div>
          <div class="extra-toggle">
            <div class="extra-toggle-btn ${vehicleData.neonPositions && vehicleData.neonPositions[1] ? 'active' : ''}" data-position="1" id="neon-pos-1"></div>
            <div class="extra-toggle-label">Néon arrière</div>
          </div>
          <div class="extra-toggle">
            <div class="extra-toggle-btn ${vehicleData.neonPositions && vehicleData.neonPositions[2] ? 'active' : ''}" data-position="2" id="neon-pos-2"></div>
            <div class="extra-toggle-label">Néon gauche</div>
          </div>
          <div class="extra-toggle">
            <div class="extra-toggle-btn ${vehicleData.neonPositions && vehicleData.neonPositions[3] ? 'active' : ''}" data-position="3" id="neon-pos-3"></div>
            <div class="extra-toggle-label">Néon droite</div>
          </div>
        </div>
      </div>
    </div>
  `);
  
  // Couleur des néons avec onglets
  neonSection.append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Couleur des néons</div>
      </div>
      
      <div class="color-content">
        <div class="color-tabs">
          <div class="color-tab active" data-tab="simple" data-target="neon">Couleurs prédéfinies</div>
          <div class="color-tab" data-tab="custom" data-target="neon">Couleur personnalisée</div>
        </div>
        
        <div id="neon-simple-content">
          <div class="neon-colors-grid">
            <div class="color-item neon-color" data-rgb="255,255,255" style="background-color: rgb(255,255,255)"><span>Blanc</span></div>
            <div class="color-item neon-color" data-rgb="255,0,0" style="background-color: rgb(255,0,0)"><span>Rouge</span></div>
            <div class="color-item neon-color" data-rgb="0,255,0" style="background-color: rgb(0,255,0)"><span>Vert</span></div>
            <div class="color-item neon-color" data-rgb="0,0,255" style="background-color: rgb(0,0,255)"><span>Bleu</span></div>
            <div class="color-item neon-color" data-rgb="255,255,0" style="background-color: rgb(255,255,0)"><span>Jaune</span></div>
            <div class="color-item neon-color" data-rgb="0,255,255" style="background-color: rgb(0,255,255)"><span>Cyan</span></div>
            <div class="color-item neon-color" data-rgb="255,0,255" style="background-color: rgb(255,0,255)"><span>Rose</span></div>
            <div class="color-item neon-color" data-rgb="255,165,0" style="background-color: rgb(255,165,0)"><span>Orange</span></div>
            <div class="color-item neon-color" data-rgb="128,0,128" style="background-color: rgb(128,0,128)"><span>Violet</span></div>
            <div class="color-item neon-color" data-rgb="50,205,50" style="background-color: rgb(50,205,50)"><span>Lime</span></div>
            <div class="color-item neon-color" data-rgb="255,20,147" style="background-color: rgb(255,20,147)"><span>Fuschia</span></div>
            <div class="color-item neon-color" data-rgb="70,130,180" style="background-color: rgb(70,130,180)"><span>Azur</span></div>
          </div>
        </div>
        
        <div id="neon-custom-content" style="display: none;">
          <div class="neon-preview" id="neon-preview"></div>
          
          <div class="rgb-sliders">
            <div class="rgb-slider">
              <span>R</span>
              <input type="range" min="0" max="255" value="${vehicleData.neonColor ? vehicleData.neonColor[0] : 255}" id="neon-r-slider">
              <span id="neon-r-value">${vehicleData.neonColor ? vehicleData.neonColor[0] : 255}</span>
            </div>
            <div class="rgb-slider">
              <span>G</span>
              <input type="range" min="0" max="255" value="${vehicleData.neonColor ? vehicleData.neonColor[1] : 0}" id="neon-g-slider">
              <span id="neon-g-value">${vehicleData.neonColor ? vehicleData.neonColor[1] : 0}</span>
            </div>
            <div class="rgb-slider">
              <span>B</span>
              <input type="range" min="0" max="255" value="${vehicleData.neonColor ? vehicleData.neonColor[2] : 255}" id="neon-b-slider">
              <span id="neon-b-value">${vehicleData.neonColor ? vehicleData.neonColor[2] : 255}</span>
            </div>
          </div>
          
          <div class="color-picker-values">
            <div class="color-input">
              <span>HEX</span>
              <input type="text" id="neon-hex-value" value="${vehicleData.neonColor ? rgbToHex(vehicleData.neonColor[0], vehicleData.neonColor[1], vehicleData.neonColor[2]) : '#FF00FF'}">
            </div>
            <div class="color-input">
              <span>H</span>
              <input type="number" min="0" max="360" id="neon-h-value" value="${vehicleData.neonColor ? rgbToHsb(vehicleData.neonColor[0], vehicleData.neonColor[1], vehicleData.neonColor[2])[0] : 300}">
            </div>
            <div class="color-input">
              <span>S</span>
              <input type="number" min="0" max="100" id="neon-s-value" value="${vehicleData.neonColor ? rgbToHsb(vehicleData.neonColor[0], vehicleData.neonColor[1], vehicleData.neonColor[2])[1] : 100}">
            </div>
            <div class="color-input">
              <span>B</span>
              <input type="number" min="0" max="100" id="neon-b-value" value="${vehicleData.neonColor ? rgbToHsb(vehicleData.neonColor[0], vehicleData.neonColor[1], vehicleData.neonColor[2])[2] : 100}">
            </div>
          </div>
          
          <div class="gradient-slider">
            <input type="range" min="0" max="360" value="${vehicleData.neonColor ? rgbToHsb(vehicleData.neonColor[0], vehicleData.neonColor[1], vehicleData.neonColor[2])[0] : 300}" id="neon-hue-slider">
          </div>
          
          <button class="apply-color-btn" id="apply-neon-color">Appliquer</button>
        </div>
      </div>
    </div>
  `);
  
  // Variable pour suivre la couleur de néon sélectionnée
  window.selectedNeonRGB = vehicleData.neonColor ? [...vehicleData.neonColor] : [255, 0, 255];
  
  // Initialiser la prévisualisation des néons
  const neonR = vehicleData.neonColor ? vehicleData.neonColor[0] : 255;
  const neonG = vehicleData.neonColor ? vehicleData.neonColor[1] : 0;
  const neonB = vehicleData.neonColor ? vehicleData.neonColor[2] : 255;
  updateNeonPreview(neonR, neonG, neonB);
  
  // Mettre en surbrillance la couleur de néon active dans la grille de couleurs prédéfinies
  if (vehicleData.neonColor) {
    const r = vehicleData.neonColor[0];
    const g = vehicleData.neonColor[1];
    const b = vehicleData.neonColor[2];
    
    // Rechercher dans les couleurs prédéfinies
    $(`.neon-color`).each(function() {
      const rgb = $(this).data('rgb').split(',');
      if (Math.abs(parseInt(rgb[0]) - r) < 5 && 
          Math.abs(parseInt(rgb[1]) - g) < 5 && 
          Math.abs(parseInt(rgb[2]) - b) < 5) {
        $(this).addClass('active');
      }
    });
  }
  
  // Configurer les gestionnaires d'événements
  
  // Toggle principal des néons
  $("#neon-main-toggle").on("click", function() {
    const isActive = $(this).hasClass("active");
    if (isActive) {
      $(this).removeClass("active");
      applyModification("neons", 0);
      showNotification("Néons désactivés");
    } else {
      $(this).addClass("active");
      applyModification("neons", 1);
      showNotification("Néons activés");
    }
  });
  
  // Gestion des positions de néons
  $(".neon-positions .extra-toggle-btn").on("click", function() {
    const isActive = $(this).hasClass("active");
    const position = parseInt($(this).data("position"));
    
    if (isActive) {
      $(this).removeClass("active");
      applyModification("neonPosition", 0, position); // CORRECTION: Format simplifié
    } else {
      $(this).addClass("active");
      applyModification("neonPosition", 1, position); // CORRECTION: Format simplifié
      
      // Activer les néons si pas déjà actifs
      if (!$("#neon-main-toggle").hasClass("active")) {
        $("#neon-main-toggle").addClass("active");
        applyModification("neons", 1);
      }
    }
  });
  
  // Onglets de couleur (prédéfinie vs personnalisée)
  $(".color-tab").off('click').on("click", function() {
    const tabType = $(this).data("tab");
    const target = $(this).data("target");
    const section = $(this).closest(".color-section");
    
    // Mettre à jour les onglets
    section.find(".color-tab").removeClass("active");
    $(this).addClass("active");
    
    // Afficher le contenu approprié
    if (tabType === "simple") {
      $(`#${target}-simple-content`).show();
      $(`#${target}-custom-content`).hide();
    } else {
      $(`#${target}-simple-content`).hide();
      $(`#${target}-custom-content`).show();
    }
  });
  
  // Sélection des couleurs prédéfinies
  $(".neon-color").on("click", function() {
    $(".neon-color").removeClass("active selected");
    $(this).addClass("active selected");
    
    const rgb = $(this).data("rgb").split(',').map(Number);
    window.selectedNeonRGB = rgb;
    
    // Appliquer immédiatement la couleur - CORRECTION: Format compatible
    applyModification("neonColor", null, rgb);
    
    // Mettre à jour l'interface de couleur personnalisée
    updateNeonPreview(rgb[0], rgb[1], rgb[2]);
    $("#neon-r-slider").val(rgb[0]);
    $("#neon-g-slider").val(rgb[1]);
    $("#neon-b-slider").val(rgb[2]);
    $("#neon-r-value").text(rgb[0]);
    $("#neon-g-value").text(rgb[1]);
    $("#neon-b-value").text(rgb[2]);
    
    // Mettre à jour les valeurs HSB
    const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
    $("#neon-h-value").val(hsb[0]);
    $("#neon-s-value").val(hsb[1]);
    $("#neon-b-value").val(hsb[2]);
    $("#neon-hue-slider").val(hsb[0]);
    
    // Mettre à jour la valeur hex
    $("#neon-hex-value").val(rgbToHex(rgb[0], rgb[1], rgb[2]));
    
    // Activer les néons si pas déjà actifs
    if (!$("#neon-main-toggle").hasClass("active")) {
      $("#neon-main-toggle").addClass("active");
      applyModification("neons", 1);
    }
    
    // Notification
    const colorName = $(this).find("span").text();
    showNotification(`Couleur de néon: ${colorName}`);
  });
  
  // Configuration du sélecteur de couleur personnalisée
  setupNeonColorPicker();
  
  // Bouton d'application de la couleur personnalisée
  $("#apply-neon-color").on("click", function() {
    const r = parseInt($("#neon-r-slider").val());
    const g = parseInt($("#neon-g-slider").val());
    const b = parseInt($("#neon-b-slider").val());
    
    window.selectedNeonRGB = [r, g, b];
    
    // Appliquer la couleur - CORRECTION: Format compatible
    applyModification("neonColor", null, [r, g, b]);
    
    // Mettre à jour l'interface
    updateNeonPreview(r, g, b);
    $("#neon-preview").addClass("color-changed");
    setTimeout(() => $("#neon-preview").removeClass("color-changed"), 300);
    
    // Activer les néons si nécessaire
    if (!$("#neon-main-toggle").hasClass("active")) {
      $("#neon-main-toggle").addClass("active");
      applyModification("neons", 1);
    }
    
    // Notification
    showNotification(`Couleur de néon personnalisée appliquée: RGB(${r}, ${g}, ${b})`);
  });
}

// Configuration du sélecteur de couleur personnalisée pour les néons
function setupNeonColorPicker() {
  // Initialiser la prévisualisation avec un effet de lueur
  const r = parseInt($("#neon-r-slider").val());
  const g = parseInt($("#neon-g-slider").val());
  const b = parseInt($("#neon-b-slider").val());
  updateNeonPreview(r, g, b);
  
  // Mettre à jour à chaque changement de slider RGB
  $("#neon-r-slider, #neon-g-slider, #neon-b-slider").on("input", function() {
    const r = parseInt($("#neon-r-slider").val());
    const g = parseInt($("#neon-g-slider").val());
    const b = parseInt($("#neon-b-slider").val());
    
    // Mettre à jour les valeurs affichées
    $("#neon-r-value").text(r);
    $("#neon-g-value").text(g);
    $("#neon-b-value").text(b);
    
    // Mettre à jour la prévisualisation
    updateNeonPreview(r, g, b);
    
    // Mettre à jour la valeur hex
    const hex = rgbToHex(r, g, b);
    $("#neon-hex-value").val(hex);
    
    // Mettre à jour les valeurs HSB
    const hsb = rgbToHsb(r, g, b);
    $("#neon-h-value").val(hsb[0]);
    $("#neon-s-value").val(hsb[1]);
    $("#neon-b-value").val(hsb[2]);
    
    // Mettre à jour le slider de teinte
    $("#neon-hue-slider").val(hsb[0]);
  });
  
  // Mettre à jour quand la valeur hex change
  $("#neon-hex-value").on("change", function() {
    const hex = $(this).val();
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      const rgb = hexToRgb(hex);
      
      // Mettre à jour les sliders RGB
      $("#neon-r-slider").val(rgb[0]);
      $("#neon-g-slider").val(rgb[1]);
      $("#neon-b-slider").val(rgb[2]);
      
      // Mettre à jour les valeurs affichées
      $("#neon-r-value").text(rgb[0]);
      $("#neon-g-value").text(rgb[1]);
      $("#neon-b-value").text(rgb[2]);
      
      // Mettre à jour la prévisualisation
      updateNeonPreview(rgb[0], rgb[1], rgb[2]);
      
      // Mettre à jour les valeurs HSB
      const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
      $("#neon-h-value").val(hsb[0]);
      $("#neon-s-value").val(hsb[1]);
      $("#neon-b-value").val(hsb[2]);
      
      // Mettre à jour le slider de teinte
      $("#neon-hue-slider").val(hsb[0]);
    }
  });
  
  // Mettre à jour quand les valeurs HSB changent
  $("#neon-h-value, #neon-s-value, #neon-b-value").on("change", function() {
    const h = parseInt($("#neon-h-value").val() || 0);
    const s = parseInt($("#neon-s-value").val() || 100);
    const v = parseInt($("#neon-b-value").val() || 100);
    
    // Convertir HSB en RGB
    const rgb = hsbToRgb(h, s, v);
    
    // Mettre à jour les sliders RGB
    $("#neon-r-slider").val(rgb[0]);
    $("#neon-g-slider").val(rgb[1]);
    $("#neon-b-slider").val(rgb[2]);
    
    // Mettre à jour les valeurs affichées
    $("#neon-r-value").text(rgb[0]);
    $("#neon-g-value").text(rgb[1]);
    $("#neon-b-value").text(rgb[2]);
    
    // Mettre à jour la prévisualisation
    updateNeonPreview(rgb[0], rgb[1], rgb[2]);
    
    // Mettre à jour la valeur hex
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    $("#neon-hex-value").val(hex);
    
    // Mettre à jour le slider de teinte
    $("#neon-hue-slider").val(h);
  });
  
  // Mettre à jour quand le slider de teinte change
  $("#neon-hue-slider").on("input", function() {
    const hue = parseInt($(this).val());
    $("#neon-h-value").val(hue);
    
    // Récupérer les valeurs actuelles de saturation et luminosité
    const s = parseInt($("#neon-s-value").val() || 100);
    const v = parseInt($("#neon-b-value").val() || 100);
    
    // Convertir HSB en RGB
    const rgb = hsbToRgb(hue, s, v);
    
    // Mettre à jour les sliders RGB
    $("#neon-r-slider").val(rgb[0]);
    $("#neon-g-slider").val(rgb[1]);
    $("#neon-b-slider").val(rgb[2]);
    
    // Mettre à jour les valeurs affichées
    $("#neon-r-value").text(rgb[0]);
    $("#neon-g-value").text(rgb[1]);
    $("#neon-b-value").text(rgb[2]);
    
    // Mettre à jour la prévisualisation
    updateNeonPreview(rgb[0], rgb[1], rgb[2]);
    
    // Mettre à jour la valeur hex
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    $("#neon-hex-value").val(hex);
  });
}

// Fonction pour mettre à jour la prévisualisation des néons avec effet de lueur
function updateNeonPreview(r, g, b) {
  const preview = $("#neon-preview");
  
  // Définir les styles de base
  preview.css({
    "background-color": `rgb(${r},${g},${b})`,
    "box-shadow": `0 0 20px rgba(${r},${g},${b},0.8), inset 0 0 10px rgba(255,255,255,0.5)`,
    "position": "relative",
    "height": "70px",
    "border-radius": "8px",
    "margin-bottom": "15px",
    "overflow": "hidden"
  });
  
  // Ajouter un effet de lueur interne si nécessaire
  if (preview.find(".neon-glow").length === 0) {
    preview.append(`<div class="neon-glow"></div>`);
    
    $(".neon-glow").css({
      "position": "absolute",
      "top": "50%",
      "left": "50%",
      "transform": "translate(-50%, -50%)",
      "width": "80%",
      "height": "5px",
      "background": "rgba(255,255,255,0.7)",
      "filter": "blur(5px)",
      "border-radius": "50%"
    });
  }
  
  // Mettre à jour la couleur de l'effet de lueur
  $(".neon-glow").css({
    "box-shadow": `0 0 30px 10px rgba(${r},${g},${b},0.8)`
  });
}

// FONCTION CRITIQUE: Vérifie le RegisterNUICallback existant pour applyModification
function checkNUICallbackImplementation() {
}

// Styles CSS additionnels pour les néons
const neonCSS = `
.neon-colors-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 15px;
}

.neon-color {
  position: relative;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s ease;
  padding-bottom: 5px;
}

.neon-color:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 15px currentColor;
  border-color: rgba(255, 255, 255, 0.5);
}

.neon-color.active, .neon-color.selected {
  border-color: #ffffff;
  box-shadow: 0 0 15px currentColor, inset 0 0 5px rgba(255, 255, 255, 0.5);
}

.neon-color span {
  position: relative;
  z-index: 2;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.9);
  font-weight: bold;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 3px;
}

/* Effet de lueur pour les couleurs de néon */
.neon-color::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 5px;
  background: rgba(255,255,255,0.7);
  filter: blur(5px);
  border-radius: 50%;
}

/* Animation pour le changement de couleur des néons */
@keyframes neon-pulse {
  0% { opacity: 0.7; }
  50% { opacity: 1; }
  100% { opacity: 0.7; }
}

.color-changed .neon-glow {
  animation: neon-pulse 0.5s ease;
}
`;

// Ajouter le CSS à la page
$('head').append(`<style>${neonCSS}</style>`);

// Exécuter au chargement
$(document).ready(function() {
  // Afficher une vérification au chargement
  setTimeout(checkNUICallbackImplementation, 2000);
});

  // Fonction pour afficher une notification
  function showNotification(message) {
    // Supprimer les anciennes notifications
    $(".notification").remove();

    // Créer la nouvelle notification
    const notification = $(`<div class="notification">${message}</div>`);
    $("body").append(notification);

    // Animation d'entrée
    notification
      .css({
        bottom: "-50px",
        opacity: 0,
      })
      .animate(
        {
          bottom: "20px",
          opacity: 1,
        },
        300
      );

    // Animation de sortie après 2 secondes
    setTimeout(() => {
      notification.animate(
        {
          bottom: "-50px",
          opacity: 0,
        },
        300,
        function () {
          $(this).remove();
        }
      );
    }, 2000);
  }

  // Fonction pour appliquer une modification au véhicule
  function applyModification(category, level, extraData) {
    console.log(
      `Applying modification: ${category}, Level: ${level}, Extra: ${extraData}`
    );

    // Envoyer la modification au jeu
    $.post(
      "https://custom/applyModification",
      JSON.stringify({
        category: category,
        level: level,
        color: extraData,
        extraId: extraData,
      }),
      function (response) {
        if (response && response.success === false) {
          console.error(
            `Erreur lors de l'application de la modification: ${category}`,
            response.error
          );
        }
      }
    ).fail(function (error) {
      console.error("Erreur de requête:", error);
    });
  }

  // Gestionnaire d'événements pour recevoir les messages du serveur

  // Mise à jour du style CSS
  const newCSS = `
/* Style pour le color-preview */
.color-preview {
  width: 100%;
  height: 160px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
}

.color-preview:hover {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5), 0 0 10px rgba(40, 116, 166, 0.5);
  transform: scale(1.02);
}

.color-preview:active {
  transform: scale(0.98);
}

/* Style pour afficher un indicateur d'aide sur le preview */
.color-preview::after {
  content: 'Cliquer pour personnaliser';
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
  font-size: 12px;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.color-preview:hover::after {
  opacity: 1;
}

/* Style pour la section-header avec bouton */
.color-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Styles pour le bouton d'expansion */
.color-expand-btn {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ffffff;
  transition: transform 0.2s ease;
}

.color-expand-btn:hover {
  transform: scale(1.2);
}

/* Animation pour le changement de couleur */
@keyframes color-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.02); box-shadow: 0 0 15px rgba(40, 116, 166, 0.7); }
  100% { transform: scale(1); }
}

.color-changed {
  animation: color-pulse 0.3s ease;
}
`;

  $("head").append(`<style>${newCSS}</style>`); // À ajouter dans une fonction d'initialisation

  // Fonction pour trouver une couleur GTA par son ID
  function findGTAColorById(id) {
    const gtaColors = [
      // Noirs/gris
      { name: "Noir", color: "#0E0E0E", id: 0 },
      { name: "Graphite", color: "#1C1D21", id: 1 },
      { name: "Noir acier", color: "#32383D", id: 2 },
      { name: "Gris foncé", color: "#454B4F", id: 3 },
      { name: "Gris", color: "#666970", id: 4 },
      { name: "Gris clair", color: "#969995", id: 5 },
      { name: "Argent", color: "#C5C5C5", id: 6 },
      { name: "Gris argent", color: "#979A97", id: 7 },
      { name: "Rouille rouge", color: "#637380", id: 8 },
      { name: "Gris acier", color: "#63625C", id: 9 },
      { name: "Gris météorite", color: "#3A3C3F", id: 10 },
      { name: "Noir gravier", color: "#27292B", id: 11 },
      { name: "Aluminium", color: "#73848C", id: 12 },
      { name: "Chrome brossé", color: "#96928E", id: 13 },
      { name: "Gris acier foncé", color: "#515459", id: 14 },
      { name: "Gris anthracite", color: "#373C43", id: 15 },
      { name: "Noir absolu", color: "#0E0F11", id: 16 },
      { name: "Noir charbon", color: "#121315", id: 17 },
      { name: "Gris satiné", color: "#8598A5", id: 18 },
      { name: "Noir satiné", color: "#0D131B", id: 19 },
      { name: "Noir ultime", color: "#050506", id: 20 },
      { name: "Noir quartz", color: "#15181C", id: 21 },
      { name: "Noir uni", color: "#0F0F0F", id: 22 },

      // Blancs
      { name: "Blanc nacré", color: "#F1F1F1", id: 106 },
      { name: "Blanc", color: "#FFFFFF", id: 111 },
      { name: "Blanc glacier", color: "#F5F5F5", id: 112 },
      { name: "Crème", color: "#FFF5D0", id: 113 },
      { name: "Blanc givré", color: "#EAEAEA", id: 114 },
      { name: "Blanc osmium", color: "#DDD5D0", id: 116 },
      { name: "Blanc polaire", color: "#F7F7F7", id: 118 },
      { name: "Blanc cassé", color: "#EAE6DE", id: 121 },
      { name: "Ivoire", color: "#F0E5D0", id: 122 },

      // Rouges
      { name: "Rouge", color: "#B0090F", id: 27 },
      { name: "Rouge vif", color: "#D10A17", id: 28 },
      { name: "Rouge grenat", color: "#93002B", id: 29 },
      { name: "Rouge flamme", color: "#DE0F18", id: 30 },
      { name: "Rouge gracieux", color: "#8A292C", id: 31 },
      { name: "Rouge vin", color: "#5E1E25", id: 32 },
      { name: "Rouge cabernet", color: "#620C1C", id: 33 },
      { name: "Rouge bonbon", color: "#D10056", id: 34 },
      { name: "Rouge pomme", color: "#B8091A", id: 35 },
      { name: "Rouge écarlate", color: "#E6133C", id: 141 },
      { name: "Rouge rubis", color: "#8C1D24", id: 142 },
      { name: "Rouge vermillon", color: "#942126", id: 144 },
      { name: "Rouge corail", color: "#C72133", id: 150 },
      { name: "Rouge opéra", color: "#6E0E21", id: 155 },

      // Roses
      { name: "Rose", color: "#F2C4E4", id: 135 },
      { name: "Rose chaud", color: "#D5007A", id: 35 },
      { name: "Rose fuschia", color: "#B01259", id: 137 },
      { name: "Rose saumon", color: "#F69697", id: 136 },
      { name: "Rose pfister", color: "#BE2F8A", id: 138 },

      // Oranges
      { name: "Orange", color: "#F78616", id: 38 },
      { name: "Orange vif", color: "#E56310", id: 41 },
      { name: "Orange soleil", color: "#F0835C", id: 44 },
      { name: "Orange citrus", color: "#FFC35C", id: 43 },
      { name: "Orange crème", color: "#FDAA75", id: 130 },
      { name: "Orange métallisé", color: "#D16018", id: 131 },
      { name: "Orange automne", color: "#BE5B33", id: 153 },

      // Bruns
      { name: "Or", color: "#A77B48", id: 37 },
      { name: "Bronze", color: "#594E33", id: 90 },
      { name: "Cuivre orangé", color: "#A25A16", id: 36 },
      { name: "Cuivre", color: "#8E633A", id: 154 },
      { name: "Brun", color: "#3D311E", id: 96 },
      { name: "Brun moyen", color: "#5A3921", id: 97 },
      { name: "Brun clair", color: "#6D4C32", id: 98 },
      { name: "Ocre", color: "#BD9462", id: 99 },
      { name: "Kaki", color: "#7D6256", id: 100 },
      { name: "Beige", color: "#D9C6B0", id: 95 },
      { name: "Brun chocolat", color: "#372119", id: 101 },
      { name: "Brun terre", color: "#4E352B", id: 102 },
      { name: "Brun feuille", color: "#51463D", id: 103 },
      { name: "Brun marais", color: "#3C322A", id: 127 },

      // Jaunes
      { name: "Jaune", color: "#FFC91F", id: 42 },
      { name: "Jaune course", color: "#DED835", id: 89 },
      { name: "Jaune canari", color: "#FFEB2F", id: 88 },
      { name: "Jaune crème", color: "#F0E565", id: 89 },
      { name: "Jaune citron", color: "#B5AF3A", id: 91 },
      { name: "Jaune bronzé", color: "#B7A55F", id: 122 },

      // Verts
      { name: "Vert foncé", color: "#132428", id: 52 },
      { name: "Vert forêt", color: "#1F2E2C", id: 53 },
      { name: "Vert olive", color: "#4E6443", id: 54 },
      { name: "Vert vif", color: "#66B81F", id: 55 },
      { name: "Vert gazon", color: "#129500", id: 56 },
      { name: "Vert lime", color: "#7EC000", id: 92 },
      { name: "Vert menthe", color: "#A3E064", id: 94 },
      { name: "Vert sapin", color: "#1D261C", id: 49 },
      { name: "Vert Mossport", color: "#1E302D", id: 50 },
      { name: "Vert chasseur", color: "#2F353A", id: 51 },
      { name: "Vert émeraude", color: "#23442F", id: 52 },
      { name: "Vert pomme", color: "#91CA34", id: 57 },
      { name: "Vert bouteille", color: "#122731", id: 58 },
      { name: "Vert mousse", color: "#5F7168", id: 59 },
      { name: "Vert citron", color: "#A9C758", id: 93 },
      { name: "Vert prairie", color: "#356640", id: 151 },
      { name: "Vert pin", color: "#1E442A", id: 156 },

      // Bleus
      { name: "Bleu nuit", color: "#0B1421", id: 64 },
      { name: "Bleu galaxie", color: "#111E25", id: 65 },
      { name: "Bleu foncé", color: "#1E2130", id: 66 },
      { name: "Bleu marine", color: "#1D2144", id: 67 },
      { name: "Bleu diamant", color: "#2F3554", id: 68 },
      { name: "Bleu surf", color: "#3B4E78", id: 69 },
      { name: "Bleu nautique", color: "#0A1D2B", id: 70 },
      { name: "Bleu vif", color: "#1157BD", id: 73 },
      { name: "Bleu ciel", color: "#57A2CE", id: 74 },
      { name: "Bleu paradis", color: "#7AAFDE", id: 75 },
      { name: "Bleu crème", color: "#B8E3F7", id: 84 },
      { name: "Acier bleuté", color: "#304C5F", id: 85 },
      { name: "Bleu minuit", color: "#2C3242", id: 71 },
      { name: "Bleu sombre", color: "#212A3F", id: 72 },
      { name: "Bleu roi", color: "#0E316D", id: 80 },
      { name: "Bleu éclatant", color: "#001E81", id: 81 },
      { name: "Bleu saphir", color: "#0F1E73", id: 82 },
      { name: "Bleu azur", color: "#253C83", id: 83 },
      { name: "Bleu-vert", color: "#506272", id: 104 },
      { name: "Bleu quartz", color: "#455B66", id: 105 },
      { name: "Bleu horizon", color: "#5E748F", id: 107 },
      { name: "Turquoise", color: "#1B9E77", id: 128 },
      { name: "Bleu épinette", color: "#112539", id: 140 },
      { name: "Bleu epsilon", color: "#3761AC", id: 146 },
      { name: "Bleu Schafter", color: "#0D2042", id: 147 },
      { name: "Bleu acier", color: "#0D3045", id: 152 },
      { name: "Bleu cobalt", color: "#192C4A", id: 157 },

      // Violets
      { name: "Violet", color: "#361E77", id: 145 },
      { name: "Violet graphite", color: "#1E1D22", id: 76 },
      { name: "Violet nuit", color: "#1E1D2C", id: 77 },
      { name: "Violet laevendel", color: "#473342", id: 78 },
      { name: "Violet foncé", color: "#261B2B", id: 79 },
      { name: "Violet pâle", color: "#5E4773", id: 143 },
      { name: "Violet améthyste", color: "#612F79", id: 148 },
      { name: "Violet sombre", color: "#242131", id: 146 },
      { name: "Schafter violet", color: "#2F2F48", id: 81 },
      { name: "Violet bourgogne", color: "#3F3655", id: 149 },

      // Métalliques spéciaux
      { name: "Chrome", color: "#DBDBDB", id: 120 },
    ];

    return (
      gtaColors.find((color) => color.id === id) || {
        name: "Couleur inconnue",
        color: "#FF0000",
        id: id,
      }
    );
  }

  // Fonction pour mettre à jour le canvas avec une nouvelle teinte
  function updateCanvasWithHue(type, hue) {
    const canvas = $(`#${type}-color-gradient canvas`)[0];
    const ctx = canvas.getContext("2d");

    // Convertir la teinte en couleur RGB
    const hueColor = hsbToRgb(hue, 100, 100);

    // Créer le dégradé de base avec la nouvelle teinte
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, "rgba(0, 0, 0, 1)");
    gradient.addColorStop(
      1,
      `rgba(${hueColor[0]}, ${hueColor[1]}, ${hueColor[2]}, 1)`
    );

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Recréer le dégradé de luminosité
    const brightnessGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    brightnessGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    brightnessGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = brightnessGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  // Fonction pour mettre à jour les entrées RGB avec une couleur
  function updateRGBInputs(type, r, g, b) {
    // Mettre à jour les sliders
    $(`#${type}-r-slider`).val(r);
    $(`#${type}-g-slider`).val(g);
    $(`#${type}-b-slider`).val(b);

    // Mettre à jour les valeurs affichées
    $(`#${type}-r-value`).text(r);
    $(`#${type}-g-value`).text(g);
    $(`#${type}-b-value`).text(b);

    // Mettre à jour l'entrée hex
    const hex = rgbToHex(r, g, b);
    $(`#${type}-hex-value`).val(hex);

    // Convertir en HSB
    const hsb = rgbToHsb(r, g, b);
    $(`#${type}-h-value`).val(hsb[0]);
    $(`#${type}-s-value`).val(hsb[1]);
    $(`#${type}-b-value`).val(hsb[2]);
  }

  // Fonction pour configurer les événements des sliders et entrées
  function setupColorPickers() {
    ["primary", "secondary"].forEach((type) => {
      // Mettre à jour les valeurs quand les sliders RGB changent
      $(`#${type}-r-slider, #${type}-g-slider, #${type}-b-slider`).on(
        "input",
        function () {
          const r = parseInt($(`#${type}-r-slider`).val());
          const g = parseInt($(`#${type}-g-slider`).val());
          const b = parseInt($(`#${type}-b-slider`).val());

          $(`#${type}-r-value`).text(r);
          $(`#${type}-g-value`).text(g);
          $(`#${type}-b-value`).text(b);

          // Mettre à jour hex
          const hex = rgbToHex(r, g, b);
          $(`#${type}-hex-value`).val(hex);

          // Convertir en HSB et mettre à jour
          const hsb = rgbToHsb(r, g, b);
          $(`#${type}-h-value`).val(hsb[0]);
          $(`#${type}-s-value`).val(hsb[1]);
          $(`#${type}-b-value`).val(hsb[2]);
        }
      );

      // Mettre à jour quand les valeurs HSB changent
      $(`#${type}-h-value, #${type}-s-value, #${type}-b-value`).on(
        "input",
        function () {
          const h = parseInt($(`#${type}-h-value`).val() || 0);
          const s = parseInt($(`#${type}-s-value`).val() || 0);
          const b = parseInt($(`#${type}-b-value`).val() || 0);

          // Convertir en RGB
          const rgb = hsbToRgb(h, s, b);

          // Mettre à jour sliders RGB
          $(`#${type}-r-slider`).val(rgb[0]);
          $(`#${type}-g-slider`).val(rgb[1]);
          $(`#${type}-b-slider`).val(rgb[2]);

          // Mettre à jour valeurs
          $(`#${type}-r-value`).text(rgb[0]);
          $(`#${type}-g-value`).text(rgb[1]);
          $(`#${type}-b-value`).text(rgb[2]);

          // Mettre à jour hex
          const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
          $(`#${type}-hex-value`).val(hex);

          // Mettre à jour slider de teinte
          $(`#${type}-hue-slider`).val(h);
          updateCanvasWithHue(type, h);
        }
      );

      // Mettre à jour quand hex change
      $(`#${type}-hex-value`).on("input", function () {
        const hex = $(this).val();
        if (/^#[0-9A-F]{6}$/i.test(hex)) {
          const rgb = hexToRgb(hex);

          // Mettre à jour RGB
          $(`#${type}-r-slider`).val(rgb[0]);
          $(`#${type}-g-slider`).val(rgb[1]);
          $(`#${type}-b-slider`).val(rgb[2]);

          $(`#${type}-r-value`).text(rgb[0]);
          $(`#${type}-g-value`).text(rgb[1]);
          $(`#${type}-b-value`).text(rgb[2]);

          // Convertir en HSB
          const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
          $(`#${type}-h-value`).val(hsb[0]);
          $(`#${type}-s-value`).val(hsb[1]);
          $(`#${type}-b-value`).val(hsb[2]);

          // Mettre à jour slider de teinte
          $(`#${type}-hue-slider`).val(hsb[0]);
          updateCanvasWithHue(type, hsb[0]);
        }
      });
    });
  }

  // Conversion RGB vers Hex
  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // Conversion Hex vers RGB
  function hexToRgb(hex) {
    hex = hex.replace(/^#/, "");
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
  }

  // Conversion HSB vers RGB
  function hsbToRgb(h, s, b) {
    s = s / 100;
    b = b / 100;

    let r, g, bl;

    if (s === 0) {
      r = g = bl = b;
    } else {
      const i = Math.floor(h / 60) % 6;
      const f = h / 60 - i;
      const p = b * (1 - s);
      const q = b * (1 - s * f);
      const t = b * (1 - s * (1 - f));

      switch (i) {
        case 0:
          r = b;
          g = t;
          bl = p;
          break;
        case 1:
          r = q;
          g = b;
          bl = p;
          break;
        case 2:
          r = p;
          g = b;
          bl = t;
          break;
        case 3:
          r = p;
          g = q;
          bl = b;
          break;
        case 4:
          r = t;
          g = p;
          bl = b;
          break;
        case 5:
          r = b;
          g = p;
          bl = q;
          break;
      }
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(bl * 255)];
  }

  // Conversion RGB vers HSB
  function rgbToHsb(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h, s;
    const v = max;

    if (delta === 0) {
      h = 0;
      s = 0;
    } else {
      s = delta / max;

      if (max === r) {
        h = ((g - b) / delta) % 6;
      } else if (max === g) {
        h = (b - r) / delta + 2;
      } else {
        h = (r - g) / delta + 4;
      }

      h *= 60;
      if (h < 0) h += 360;
    }

    return [Math.round(h), Math.round(s * 100), Math.round(v * 100)];
  }

// Couleurs corrigées pour les jantes dans GTA V - Exactement comme dans le jeu
const wheelColors = [
  { id: 0, name: "Stock", color: "#181818" },
  { id: 1, name: "Noir", color: "#0F0F0F" },
  { id: 2, name: "Graphite", color: "#1C1C1C" },
  { id: 3, name: "Noir Anthracite", color: "#2A2A2A" },
  { id: 4, name: "Noir Acier", color: "#111111" },
  { id: 5, name: "Acier foncé", color: "#333333" },
  { id: 6, name: "Argent", color: "#888888" },
  { id: 7, name: "Argent bleuté", color: "#637380" },
  { id: 8, name: "Laminé", color: "#6D6D6D" },
  { id: 9, name: "Argent ombré", color: "#5A5A5A" },
  { id: 10, name: "Pierre", color: "#7A7A7A" },
  { id: 11, name: "Minuit", color: "#3A3A3A" },
  { id: 12, name: "Gunmetal", color: "#474747" },
  { id: 13, name: "Aluminium", color: "#BBBBBB" },
  { id: 14, name: "Chrome pur", color: "#E1E1E1" },
  { id: 15, name: "Blanc frost", color: "#F0F0F0" },
  { id: 16, name: "Or", color: "#CBA44F" },
  { id: 17, name: "Or rose", color: "#CAA875" },
  { id: 18, name: "Or brossé", color: "#AC905E" },
  { id: 19, name: "Chrome doré", color: "#DFC171" },
  { id: 20, name: "Bronze", color: "#8F6445" },
  { id: 21, name: "Bronze clair", color: "#AD7B47" },
  { id: 22, name: "Cuivre", color: "#A54E35" },
  { id: 23, name: "Orange métallisé", color: "#D5643F" },
  { id: 24, name: "Rouge foncé", color: "#700000" },
  { id: 25, name: "Rouge vif", color: "#BD0000" },
  { id: 26, name: "Rouge Garnet", color: "#8A0B00" },
  { id: 27, name: "Rouge classique", color: "#C00A0A" },
  { id: 28, name: "Rouge orangé", color: "#E3321A" },
  { id: 29, name: "Rouge clair", color: "#DB2222" },
  { id: 30, name: "Jaune", color: "#F0D74F" },
  { id: 31, name: "Jaune race", color: "#F3E338" },
  { id: 32, name: "Vert citron", color: "#54A356" },
  { id: 33, name: "Vert forêt", color: "#2B4F26" },
  { id: 34, name: "Vert sapin", color: "#1B2620" },
  { id: 35, name: "Olive", color: "#596337" },
  { id: 36, name: "Vert kaki", color: "#424739" },
  { id: 37, name: "Vert vif", color: "#1CAA39" },
  { id: 38, name: "Bleu marine", color: "#1C3551" },
  { id: 39, name: "Bleu ultra", color: "#253F8F" },
  { id: 40, name: "Bleu horizon", color: "#1A1D24" },
  { id: 41, name: "Bleu profond", color: "#3B5698" },
  { id: 42, name: "Bleu surf", color: "#418CD1" },
  { id: 43, name: "Cyan pastel", color: "#3CA8CB" },
  { id: 44, name: "Bleu aqua", color: "#358283" },
  { id: 45, name: "Teal", color: "#2D484E" },
  { id: 46, name: "Bleu acier", color: "#2A3754" },
  { id: 47, name: "Bleu nuit", color: "#1D1F2C" },
  { id: 48, name: "Violet foncé", color: "#2C0055" },
  { id: 49, name: "Violet", color: "#4A0069" },
  { id: 50, name: "Rose", color: "#AC1A91" },
  { id: 51, name: "Magenta", color: "#BD4BD5" },
  { id: 52, name: "Rose saumon", color: "#D87790" },
  { id: 53, name: "Vermilion Rose", color: "#9F1D57" },
  { id: 54, name: "Lavande", color: "#7D697E" },
  { id: 55, name: "Violet Schafter", color: "#65407D" },
  { id: 56, name: "Indigo", color: "#3F1C76" },
  { id: 57, name: "Violet graphite", color: "#2F2C4A" },
  { id: 58, name: "Violet minuit", color: "#27132B" },
  { id: 59, name: "Gris brillant", color: "#CACACA" }
];

// Couleurs exactes pour la fumée des pneus dans GTA V
const tyreSmokes = [
  { id: 1, name: "Blanc", color: "#FFFFFF", rgb: [255, 255, 255] },
  { id: 2, name: "Noir", color: "#000000", rgb: [0, 0, 0] },
  { id: 3, name: "Bleu", color: "#0000AA", rgb: [0, 0, 170] },
  { id: 4, name: "Jaune", color: "#FFFF00", rgb: [255, 255, 0] },
  { id: 5, name: "Violet", color: "#AA00AA", rgb: [170, 0, 170] },
  { id: 6, name: "Orange", color: "#FF7700", rgb: [255, 119, 0] },
  { id: 7, name: "Rouge", color: "#FF0000", rgb: [255, 0, 0] },
  { id: 8, name: "Vert", color: "#00FF00", rgb: [0, 255, 0] },
  { id: 9, name: "Bleu électrique", color: "#0000FF", rgb: [0, 0, 255] },
  { id: 10, name: "Marron", color: "#663300", rgb: [102, 51, 0] },
  { id: 11, name: "Pourpre", color: "#6B0089", rgb: [107, 0, 137] },
  { id: 12, name: "Vert citron", color: "#ADFF2F", rgb: [173, 255, 47] },
  { id: 13, name: "Rose vif", color: "#FF1493", rgb: [255, 20, 147] },
  { id: 14, name: "Turquoise", color: "#00CED1", rgb: [0, 206, 209] },
  { id: 15, name: "Or", color: "#FFD700", rgb: [255, 215, 0] },
  { id: 16, name: "Azur", color: "#007FFF", rgb: [0, 127, 255] },
  { id: 17, name: "Menthe", color: "#98FB98", rgb: [152, 251, 152] },
  { id: 18, name: "Citron", color: "#FFFACD", rgb: [255, 250, 205] },
  { id: 19, name: "Corail", color: "#FF7F50", rgb: [255, 127, 80] },
  { id: 20, name: "Rouge vermillon", color: "#DF2800", rgb: [223, 40, 0] }
];

// Fonction pour générer l'interface des roues avec les bonnes couleurs
function generateWheelsUI() {
  $('#wheels-container').empty();
  
  // Ajouter un titre
  $('#wheels-container').append(`<div class="section-title">Customisation roues</div>`);
  
  // Type de roues
  const wheelTypeItem = `
    <div class="mod-item" data-category="wheelType">
      <div class="mod-item-title">Type de roues</div>
      <div class="mod-item-level" id="wheelType-level">Sport</div>
      <div class="selection">
        <div class="ligne"></div>
        <div class="rond" id="wheelType-slider"></div>
        <div class="fleches" id="wheelType-right">
          <div class="fleche"></div>
          <div class="fleche-2"></div>
        </div>
        <div class="fleches-2" id="wheelType-left">
          <div class="fleche"></div>
          <div class="fleche-2"></div>
        </div>
      </div>
    </div>
  `;
  
  $('#wheels-container').append(wheelTypeItem);
  
  // S'assurer que wheelCategories.wheelType.types est défini
  if (wheelCategories.wheelType && wheelCategories.wheelType.types && wheelCategories.wheelType.types.length > 0) {
    // Initialiser le slider pour le type de roue
    let currentType = wheelCategories.wheelType.types.findIndex(type => type.active);
    if (currentType !== -1) {
      const lineWidth = 260;
      const position = (currentType / (wheelCategories.wheelType.types.length - 1)) * lineWidth;
      $(`#wheelType-slider`).css('left', 45 + position);
      $('#wheelType-level').text(wheelCategories.wheelType.types[currentType].name);
    } else {
      $(`#wheelType-slider`).css('left', '45px');
      $('#wheelType-level').text("Sport");
    }
    
    // Gestionnaires d'événements
    $(`#wheelType-left`).click(() => changeWheelType(-1));
    $(`#wheelType-right`).click(() => changeWheelType(1));
  }
  
  // Modèle de roues avant
  $('#wheels-container').append(`<div class="mod-item-title2">Modèle de roues</div>`);
  
  // Vérifier si les options de roues avant sont disponibles
  if (wheelCategories.frontWheel) {
    const wheelModelItem = `
      <div class="mod-item" data-category="frontWheel">
        <div class="mod-item-title">Roues avant</div>
        <div class="mod-item-level" id="frontWheel-level">${wheelCategories.frontWheel.current > 0 ? "Niveau " + wheelCategories.frontWheel.current : "Aucun"}</div>
        <div class="selection">
          <div class="ligne"></div>
          <div class="rond" id="frontWheel-slider"></div>
          <div class="fleches" id="frontWheel-right">
            <div class="fleche"></div>
            <div class="fleche-2"></div>
          </div>
          <div class="fleches-2" id="frontWheel-left">
            <div class="fleche"></div>
            <div class="fleche-2"></div>
          </div>
        </div>
      </div>
    `;
    
    $('#wheels-container').append(wheelModelItem);
    
    // Initialiser le slider pour le modèle de roue avant
    const lineWidth = 260;
    const position = wheelCategories.frontWheel.maxLevel > 0 
      ? (wheelCategories.frontWheel.current / wheelCategories.frontWheel.maxLevel) * lineWidth 
      : 0;
    $(`#frontWheel-slider`).css('left', 45 + position);
    
    // Gestionnaires d'événements
    $(`#frontWheel-left`).click(() => changeModLevel('frontWheel', -1));
    $(`#frontWheel-right`).click(() => changeModLevel('frontWheel', 1));
  }
  
  // Modèle de roues arrière (seulement pour les motos)
  if (wheelCategories.backWheel && wheelCategories.backWheel.maxLevel > 0) {
    const rearWheelItem = `
      <div class="mod-item" data-category="backWheel">
        <div class="mod-item-title">Roues arrière</div>
        <div class="mod-item-level" id="backWheel-level">${wheelCategories.backWheel.current > 0 ? "Niveau " + wheelCategories.backWheel.current : "Aucun"}</div>
        <div class="selection">
          <div class="ligne"></div>
          <div class="rond" id="backWheel-slider"></div>
          <div class="fleches" id="backWheel-right">
            <div class="fleche"></div>
            <div class="fleche-2"></div>
          </div>
          <div class="fleches-2" id="backWheel-left">
            <div class="fleche"></div>
            <div class="fleche-2"></div>
          </div>
        </div>
      </div>
    `;
    
    $('#wheels-container').append(rearWheelItem);
    
    // Initialiser le slider pour le modèle de roue arrière
    const lineWidth = 260;
    const position = (wheelCategories.backWheel.current / wheelCategories.backWheel.maxLevel) * lineWidth;
    $(`#backWheel-slider`).css('left', 45 + position);
    
    // Gestionnaires d'événements
    $(`#backWheel-left`).click(() => changeModLevel('backWheel', -1));
    $(`#backWheel-right`).click(() => changeModLevel('backWheel', 1));
  }
  
  // Couleur des jantes avec onglets
  $('#wheels-container').append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Couleur des jantes</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content" id="wheel-color-content">
        <div class="color-tabs">
          <div class="color-tab active" data-tab="simple" data-target="wheel">Couleurs prédéfinies</div>
          <div class="color-tab" data-tab="custom" data-target="wheel">Couleur personnalisée</div>
        </div>
        
        <div id="wheel-simple-content">
          <div class="wheel-colors-grid">
            ${wheelColors.map(color => `
              <div class="color-item wheel-color ${vehicleData.wheelColor === color.id ? 'active' : ''}"
                   data-color="${color.id}" 
                   style="background-color: ${color.color}" 
                   title="${color.name}">
              </div>
            `).join('')}
          </div>
        </div>
        
        <div id="wheel-custom-content" style="display: none;">
          <div class="color-preview" id="wheel-preview"></div>
          
          <div class="rgb-sliders">
            <div class="rgb-slider">
              <span>R</span>
              <input type="range" min="0" max="255" value="128" id="wheel-r-slider">
              <span id="wheel-r-value">128</span>
            </div>
            <div class="rgb-slider">
              <span>G</span>
              <input type="range" min="0" max="255" value="128" id="wheel-g-slider">
              <span id="wheel-g-value">128</span>
            </div>
            <div class="rgb-slider">
              <span>B</span>
              <input type="range" min="0" max="255" value="128" id="wheel-b-slider">
              <span id="wheel-b-value">128</span>
            </div>
          </div>
          
          <div class="color-picker-values">
            <div class="color-input">
              <span>HEX</span>
              <input type="text" id="wheel-hex-value" value="#808080">
            </div>
            <div class="color-input">
              <span>H</span>
              <input type="number" min="0" max="360" id="wheel-h-value" value="0">
            </div>
            <div class="color-input">
              <span>S</span>
              <input type="number" min="0" max="100" id="wheel-s-value" value="0">
            </div>
            <div class="color-input">
              <span>B</span>
              <input type="number" min="0" max="100" id="wheel-b-value" value="50">
            </div>
          </div>
          
          <div class="gradient-slider">
            <input type="range" min="0" max="360" value="0" id="wheel-hue-slider">
          </div>
          
          <button class="apply-color-btn" id="apply-wheel-color">Appliquer</button>
        </div>
      </div>
    </div>
  `);
  
  // Initialiser la prévisualisation de la couleur des jantes
  if (vehicleData.wheelColor !== undefined) {
    initWheelColorPreview(vehicleData.wheelColor);
  }
  
  // Fumée des pneus
  $('#wheels-container').append(`
    <div class="color-section">
      <div class="color-section-header">
        <div class="color-title">Fumée des pneus</div>
        <div class="color-expand-btn"><i class="fas fa-chevron-up"></i></div>
      </div>
      
      <div class="color-content">
        <div class="extra-toggle">
          <div class="extra-toggle-btn ${vehicleData.smokeEnabled ? 'active' : ''}" id="smoke-toggle"></div>
          <div class="extra-toggle-label">Activer la fumée</div>
        </div>
        
        <div class="color-tabs">
          <div class="color-tab active" data-tab="simple" data-target="smoke">Couleurs prédéfinies</div>
          <div class="color-tab" data-tab="custom" data-target="smoke">Couleur personnalisée</div>
        </div>
        
        <div id="smoke-simple-content">
          <div class="smoke-colors-grid">
            ${tyreSmokes.map(smoke => `
              <div class="color-item smoke-color" 
                   data-color-id="${smoke.id}" 
                   data-rgb="${smoke.rgb.join(',')}" 
                   style="background-color: ${smoke.color}" 
                   title="${smoke.name}">
                <span>${smoke.name}</span>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div id="smoke-custom-content" style="display: none;">
          <div class="smoke-preview" id="smoke-preview"></div>
          
          <div class="rgb-sliders">
            <div class="rgb-slider">
              <span>R</span>
              <input type="range" min="0" max="255" value="128" id="smoke-r-slider">
              <span id="smoke-r-value">128</span>
            </div>
            <div class="rgb-slider">
              <span>G</span>
              <input type="range" min="0" max="255" value="128" id="smoke-g-slider">
              <span id="smoke-g-value">128</span>
            </div>
            <div class="rgb-slider">
              <span>B</span>
              <input type="range" min="0" max="255" value="128" id="smoke-b-slider">
              <span id="smoke-b-value">128</span>
            </div>
          </div>
          
          <div class="color-picker-values">
            <div class="color-input">
              <span>HEX</span>
              <input type="text" id="smoke-hex-value" value="#808080">
            </div>
          </div>
          
          <div class="gradient-slider">
            <input type="range" min="0" max="360" value="0" id="smoke-hue-slider">
          </div>
          
          <button class="apply-color-btn" id="apply-smoke-color">Appliquer</button>
        </div>
      </div>
    </div>
  `);
  
  // Configurer les gestionnaires d'événements
  
  // Onglets de couleur
  $(".color-tab").off('click').on("click", function() {
    const tabType = $(this).data("tab");
    const target = $(this).data("target");
    const section = $(this).closest(".color-section");
    
    // Mettre à jour les onglets
    section.find(".color-tab").removeClass("active");
    $(this).addClass("active");
    
    // Afficher le contenu approprié
    if (tabType === "simple") {
      $(`#${target}-simple-content`).show();
      $(`#${target}-custom-content`).hide();
    } else {
      $(`#${target}-simple-content`).hide();
      $(`#${target}-custom-content`).show();
    }
  });
  
  // Configurer les boutons d'expansion
  setupColorExpandButtons();
  
  // Couleur des jantes (prédéfinies)
  $(".wheel-color").on("click", function() {
    $(".wheel-color").removeClass("active selected");
    $(this).addClass("active selected");
    
    const colorId = parseInt($(this).data("color"));
    
    // Appliquer la couleur
    applyModification("wheelColor", colorId);
    
    // Mettre à jour la prévisualisation
    initWheelColorPreview(colorId);
    
    // Notification
    const colorName = $(this).attr("title") || "Couleur";
    showNotification(`Couleur de jantes: ${colorName}`);
  });
  
  // Couleur des fumées (prédéfinies)
  $(".smoke-color").on("click", function() {
    $(".smoke-color").removeClass("active selected");
    $(this).addClass("active selected");
    
    const colorId = parseInt($(this).data("color-id"));
    const rgb = $(this).data("rgb").split(',').map(Number);
    
    // Appliquer la couleur
    applyModification("smokeColor", colorId, { rgb: rgb });
    
    // Mettre à jour la prévisualisation
    $("#smoke-preview").css("background-color", $(this).css("background-color"));
    $("#smoke-r-slider").val(rgb[0]);
    $("#smoke-g-slider").val(rgb[1]);
    $("#smoke-b-slider").val(rgb[2]);
    $("#smoke-r-value").text(rgb[0]);
    $("#smoke-g-value").text(rgb[1]);
    $("#smoke-b-value").text(rgb[2]);
    $("#smoke-hex-value").val(rgbToHex(rgb[0], rgb[1], rgb[2]));
    $("#smoke-hue-slider").val(rgbToHsb(rgb[0], rgb[1], rgb[2])[0]);
    
    // Activer la fumée si pas déjà active
    if (!$("#smoke-toggle").hasClass("active")) {
      $("#smoke-toggle").addClass("active");
      applyModification("smoke", 1);
    }
    
    // Notification
    const smokeName = $(this).find("span").text() || "Couleur";
    showNotification(`Couleur de fumée: ${smokeName}`);
  });
  
  // Configuration des sélecteurs de couleur personnalisée
  setupWheelColorPicker();
  setupSmokeColorPicker();
  
  // Gestionnaire pour le toggle de fumée
  $('#smoke-toggle').on("click", function() {
    const isActive = $(this).hasClass('active');
    if (isActive) {
      $(this).removeClass('active');
      applyModification('smoke', 0);
      showNotification("Fumée des pneus désactivée");
    } else {
      $(this).addClass('active');
      applyModification("smoke", 1);
      showNotification("Fumée des pneus activée");
    }
  });
  
  // Boutons d'application des couleurs personnalisées
  $("#apply-wheel-color").on("click", function() {
    const r = parseInt($("#wheel-r-slider").val());
    const g = parseInt($("#wheel-g-slider").val());
    const b = parseInt($("#wheel-b-slider").val());
    
    // Trouver la couleur de jante la plus proche
    const closestColor = findClosestWheelColor(r, g, b);
    
    // Appliquer la couleur
    applyModification("wheelColor", closestColor.id);
    
    // Mettre à jour l'interface
    $(".wheel-color").removeClass("active");
    $(`.wheel-color[data-color="${closestColor.id}"]`).addClass("active");
    
    // Notification
    showNotification(`Couleur de jantes: ${closestColor.name}`);
  });
  
  $("#apply-smoke-color").on("click", function() {
    const r = parseInt($("#smoke-r-slider").val());
    const g = parseInt($("#smoke-g-slider").val());
    const b = parseInt($("#smoke-b-slider").val());
    
    // Trouver la couleur de fumée la plus proche
    const closestSmoke = findClosestSmokeColor(r, g, b);
    
    // Appliquer la couleur
    applyModification("smokeColor", closestSmoke.id, { rgb: closestSmoke.rgb });
    
    // Mettre à jour l'interface
    $(".smoke-color").removeClass("active");
    $(`.smoke-color[data-color-id="${closestSmoke.id}"]`).addClass("active");
    
    // Activer la fumée si pas déjà active
    if (!$("#smoke-toggle").hasClass("active")) {
      $("#smoke-toggle").addClass("active");
      applyModification("smoke", 1);
    }
    
    // Notification
    showNotification(`Couleur de fumée personnalisée: ${closestSmoke.name}`);
  });
  
  // Initialiser les sliders glissables
  makeSlidersDraggable();
}

// Fonction pour ajouter un effet visuel de fumée à la prévisualisation
function addSmokeEffect(element, r, g, b) {
  // Définir les styles de base pour l'aperçu
  element.css({
    "background-color": `rgb(${r},${g},${b})`,
    "box-shadow": `0 0 15px rgba(${r},${g},${b},0.4)`,
    "height": "70px",
    "position": "relative",
    "border-radius": "8px",
    "margin-bottom": "15px",
    "overflow": "hidden"
  });
  
  // Supprimer les animations précédentes
  element.find(".smoke-particle").remove();
  
  // Créer un conteneur pour les particules si nécessaire
  if (element.find(".smoke-particles-container").length === 0) {
    element.append('<div class="smoke-particles-container"></div>');
    
    // Styles du conteneur
    element.find(".smoke-particles-container").css({
      "position": "absolute",
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "hidden"
    });
  }
  
  const container = element.find(".smoke-particles-container");
  
  // Créer des particules de fumée
  for (let i = 0; i < 8; i++) {
    const particle = $('<div class="smoke-particle"></div>');
    
    // Position aléatoire
    const x = Math.random() * 100; // Pourcentage de la largeur
    const y = 50 + Math.random() * 50; // Pourcentage de la hauteur (bas)
    
    // Taille aléatoire
    const size = 10 + Math.random() * 15;
    
    // Styles de la particule
    particle.css({
      "position": "absolute",
      "left": `${x}%`,
      "top": `${y}%`,
      "width": `${size}px`,
      "height": `${size}px`,
      "border-radius": "50%",
      "background-color": `rgba(${r},${g},${b},0.7)`,
      "filter": "blur(5px)",
      "opacity": "0.7",
      "transform": "translateY(0)",
      "transition": "transform 2s ease, opacity 2s ease"
    });
    
    container.append(particle);
    
    // Animation
    setTimeout(() => {
      particle.css({
        "transform": "translateY(-30px)",
        "opacity": "0"
      });
      
      // Suppression après l'animation
      setTimeout(() => {
        particle.remove();
      }, 2000);
    }, i * 200);
  }
}

// Fonction pour trouver la couleur de jante la plus proche
function findClosestWheelColor(r, g, b) {
  let closestColor = wheelColors[0];
  let minDistance = Number.MAX_VALUE;
  
  for (const color of wheelColors) {
    const rgb = hexToRgb(color.color);
    
    // Calculer la distance de couleur
    const rDiff = r - rgb[0];
    const gDiff = g - rgb[1];
    const bDiff = b - rgb[2];
    
    const distance = Math.sqrt(
      rDiff * rDiff * 0.299 + 
      gDiff * gDiff * 0.587 + 
      bDiff * bDiff * 0.114
    );
    
    if (distance < minDistance) {
      minDistance = distance;
      closestColor = color;
    }
  }
  
  return closestColor;
}

// Fonction pour trouver la couleur de fumée la plus proche
function findClosestSmokeColor(r, g, b) {
  let closestSmoke = tyreSmokes[0];
  let minDistance = Number.MAX_VALUE;
  
  for (const smoke of tyreSmokes) {
    const rgb = smoke.rgb;
    
    // Calculer la distance de couleur
    const rDiff = r - rgb[0];
    const gDiff = g - rgb[1];
    const bDiff = b - rgb[2];
    
    const distance = Math.sqrt(
      rDiff * rDiff * 0.299 + 
      gDiff * gDiff * 0.587 + 
      bDiff * bDiff * 0.114
    );
    
    if (distance < minDistance) {
      minDistance = distance;
      closestSmoke = smoke;
    }
  }
  
  return closestSmoke;
}

// Initialiser la prévisualisation de couleur des jantes
function initWheelColorPreview(colorId) {
  // Trouver la couleur correspondante
  const colorObj = wheelColors.find(c => c.id === colorId);
  if (!colorObj) return;
  
  // Convertir en RGB
  const rgb = hexToRgb(colorObj.color);
  if (!rgb) return;
  
  // Mettre à jour la prévisualisation
  $("#wheel-preview").css({
    "background-color": colorObj.color,
    "box-shadow": `inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.3)`
  });
  
  // Mettre à jour les sliders
  $("#wheel-r-slider").val(rgb[0]);
  $("#wheel-g-slider").val(rgb[1]);
  $("#wheel-b-slider").val(rgb[2]);
  
  // Mettre à jour les valeurs
  $("#wheel-r-value").text(rgb[0]);
  $("#wheel-g-value").text(rgb[1]);
  $("#wheel-b-value").text(rgb[2]);
  
  // Mettre à jour la valeur hex
  $("#wheel-hex-value").val(colorObj.color);
  
  // Convertir en HSB et mettre à jour
  const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
  $("#wheel-h-value").val(hsb[0]);
  $("#wheel-s-value").val(hsb[1]);
  $("#wheel-b-value").val(hsb[2]);
  
  // Mettre à jour le slider de teinte
  $("#wheel-hue-slider").val(hsb[0]);
}

// Configuration du sélecteur de couleur personnalisée pour les jantes
function setupWheelColorPicker() {
  // Mise à jour à chaque changement de slider RGB
  $("#wheel-r-slider, #wheel-g-slider, #wheel-b-slider").on("input", function() {
    const r = parseInt($("#wheel-r-slider").val());
    const g = parseInt($("#wheel-g-slider").val());
    const b = parseInt($("#wheel-b-slider").val());
    
    // Mettre à jour les valeurs affichées
    $("#wheel-r-value").text(r);
    $("#wheel-g-value").text(g);
    $("#wheel-b-value").text(b);
    
    // Mettre à jour la prévisualisation
    $("#wheel-preview").css({
      "background-color": `rgb(${r},${g},${b})`,
      "box-shadow": `inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(${r}, ${g}, ${b}, 0.3)`
    });
    
    // Mettre à jour la valeur hex
    const hex = rgbToHex(r, g, b);
    $("#wheel-hex-value").val(hex);
    
    // Mettre à jour les valeurs HSB
    const hsb = rgbToHsb(r, g, b);
    $("#wheel-h-value").val(hsb[0]);
    $("#wheel-s-value").val(hsb[1]);
    $("#wheel-b-value").val(hsb[2]);
    
    // Mettre à jour le slider de teinte
    $("#wheel-hue-slider").val(hsb[0]);
  });
  
  // Mettre à jour quand les valeurs HSB changent
  $("#wheel-h-value, #wheel-s-value, #wheel-b-value").on("change", function() {
    const h = parseInt($("#wheel-h-value").val() || 0);
    const s = parseInt($("#wheel-s-value").val() || 100);
    const v = parseInt($("#wheel-b-value").val() || 100);
    
    // Convertir HSB en RGB
    const rgb = hsbToRgb(h, s, v);
    
    // Mettre à jour les sliders RGB
    $("#wheel-r-slider").val(rgb[0]);
    $("#wheel-g-slider").val(rgb[1]);
    $("#wheel-b-slider").val(rgb[2]);
    
    // Mettre à jour les valeurs affichées
    $("#wheel-r-value").text(rgb[0]);
    $("#wheel-g-value").text(rgb[1]);
    $("#wheel-b-value").text(rgb[2]);
    
    // Mettre à jour la prévisualisation
    $("#wheel-preview").css({
      "background-color": `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
      "box-shadow": `inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.3)`
    });
    
    // Mettre à jour la valeur hex
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    $("#wheel-hex-value").val(hex);
  });
  
  // Mettre à jour quand le slider de teinte change
  $("#wheel-hue-slider").on("input", function() {
    const hue = parseInt($(this).val());
    $("#wheel-h-value").val(hue);
    
    // Récupérer les valeurs actuelles de saturation et luminosité
    const s = parseInt($("#wheel-s-value").val() || 100);
    const v = parseInt($("#wheel-b-value").val() || 100);
    
    // Convertir HSB en RGB
    const rgb = hsbToRgb(hue, s, v);
    
    // Mettre à jour les sliders RGB
    $("#wheel-r-slider").val(rgb[0]);
    $("#wheel-g-slider").val(rgb[1]);
    $("#wheel-b-slider").val(rgb[2]);
    
    // Mettre à jour les valeurs affichées
    $("#wheel-r-value").text(rgb[0]);
    $("#wheel-g-value").text(rgb[1]);
    $("#wheel-b-value").text(rgb[2]);
    
    // Mettre à jour la prévisualisation
    $("#wheel-preview").css({
      "background-color": `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`,
      "box-shadow": `inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 15px rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.3)`
    });
    
    // Mettre à jour la valeur hex
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    $("#wheel-hex-value").val(hex);
  });
}

// Configuration du sélecteur de couleur personnalisée pour la fumée
function setupSmokeColorPicker() {
  // Mise à jour à chaque changement de slider RGB
  $("#smoke-r-slider, #smoke-g-slider, #smoke-b-slider").on("input", function() {
    const r = parseInt($("#smoke-r-slider").val());
    const g = parseInt($("#smoke-g-slider").val());
    const b = parseInt($("#smoke-b-slider").val());
    
    // Mettre à jour les valeurs affichées
    $("#smoke-r-value").text(r);
    $("#smoke-g-value").text(g);
    $("#smoke-b-value").text(b);
    
    // Mettre à jour la prévisualisation
    addSmokeEffect($("#smoke-preview"), r, g, b);
    
    // Mettre à jour la valeur hex
    const hex = rgbToHex(r, g, b);
    $("#smoke-hex-value").val(hex);
    
    // Mettre à jour le slider de teinte
    const hsb = rgbToHsb(r, g, b);
    $("#smoke-hue-slider").val(hsb[0]);
  });
  
  // Mettre à jour quand la valeur hex change
  $("#smoke-hex-value").on("change", function() {
    const hex = $(this).val();
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      const rgb = hexToRgb(hex);
      
      // Mettre à jour les sliders RGB
      $("#smoke-r-slider").val(rgb[0]);
      $("#smoke-g-slider").val(rgb[1]);
      $("#smoke-b-slider").val(rgb[2]);
      
      // Mettre à jour les valeurs affichées
      $("#smoke-r-value").text(rgb[0]);
      $("#smoke-g-value").text(rgb[1]);
      $("#smoke-b-value").text(rgb[2]);
      
      // Mettre à jour la prévisualisation
      addSmokeEffect($("#smoke-preview"), rgb[0], rgb[1], rgb[2]);
      
      // Mettre à jour le slider de teinte
      const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
      $("#smoke-hue-slider").val(hsb[0]);
    }
  });
  
  // Mettre à jour quand le slider de teinte change
  $("#smoke-hue-slider").on("input", function() {
    const hue = parseInt($(this).val());
    
    // Convertir HSB en RGB (avec saturation et luminosité à 100%)
    const rgb = hsbToRgb(hue, 100, 100);
    
    // Mettre à jour les sliders RGB
    $("#smoke-r-slider").val(rgb[0]);
    $("#smoke-g-slider").val(rgb[1]);
    $("#smoke-b-slider").val(rgb[2]);
    
    // Mettre à jour les valeurs affichées
    $("#smoke-r-value").text(rgb[0]);
    $("#smoke-g-value").text(rgb[1]);
    $("#smoke-b-value").text(rgb[2]);
    
    // Mettre à jour la prévisualisation
    addSmokeEffect($("#smoke-preview"), rgb[0], rgb[1], rgb[2]);
    
    // Mettre à jour la valeur hex
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
    $("#smoke-hex-value").val(hex);
  });
  
  // Initialiser la prévisualisation
  const r = parseInt($("#smoke-r-slider").val());
  const g = parseInt($("#smoke-g-slider").val());
  const b = parseInt($("#smoke-b-slider").val());
  addSmokeEffect($("#smoke-preview"), r, g, b);
}

// Styles CSS améliorés pour les roues et fumée
const wheelSmokeCSS = `
.wheel-colors-grid, .smoke-colors-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  margin: 10px 0 15px 0;
}

.wheel-color {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid transparent;
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.wheel-color:hover {
  transform: scale(1.1);
  z-index: 10;
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
}

.wheel-color.active, .wheel-color.selected {
  border-color: #ffffff;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.7);
}

.smoke-color {
  position: relative;
  height: 50px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 2px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s ease;
  padding-bottom: 5px;
}

.smoke-color::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: currentColor;
  opacity: 0.7;
  filter: blur(3px);
}

.smoke-color::after {
  content: '';
  position: absolute;
  width: 80%;
  height: 50%;
  top: 15%;
  left: 10%;
  background: rgba(255, 255, 255, 0.15);
  filter: blur(5px);
  animation: smoke-drift 3s infinite alternate ease-in-out;
}

@keyframes smoke-drift {
  0% { transform: translateY(0) scale(1); opacity: 0.15; }
  100% { transform: translateY(-10px) scale(1.1); opacity: 0.2; }
}

.smoke-color:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 10px currentColor;
  border-color: rgba(255, 255, 255, 0.5);
}

.smoke-color.active, .smoke-color.selected {
  border-color: #ffffff;
  box-shadow: 0 0 10px currentColor;
}

.smoke-color span {
  position: relative;
  z-index: 2;
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.9);
  font-weight: bold;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.9);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 5px;
  border-radius: 3px;
}

/* Style pour la prévisualisation de fumée */
#smoke-preview {
  position: relative;
  height: 70px;
  border-radius: 8px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Style pour la prévisualisation des jantes */
#wheel-preview {
  position: relative;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  margin: 0 auto 15px auto;
  box-shadow: 
    inset 0 0 10px rgba(0, 0, 0, 0.5),
    0 0 15px rgba(255, 255, 255, 0.2);
  border: 5px solid #444;
}

#wheel-preview::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25px;
  height: 25px;
  background-color: #222;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

#wheel-preview::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55px;
  height: 55px;
  border: 2px dashed rgba(255, 255, 255, 0.3);
  border-radius: 50%;
}

/* Style pour une jante en 3D */
.wheel-3d {
  position: relative;
  perspective: 800px;
  width: 100px;
  height: 100px;
  margin: 0 auto 15px auto;
}

.wheel-disc {
  position: absolute;
  width: 80px;
  height: 80px;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff 0%, #aaa 50%, #666 100%);
  transform-style: preserve-3d;
  animation: wheel-rotate 10s linear infinite;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.wheel-hub {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 25px;
  left: 25px;
  border-radius: 50%;
  background: #333;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
}

.wheel-spoke {
  position: absolute;
  width: 2px;
  height: 35px;
  background: #999;
  top: 5px;
  left: 39px;
  transform-origin: bottom center;
}

@keyframes wheel-rotate {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

/* Générer des rayons */
.wheel-spoke:nth-child(1) { transform: rotate(0deg); }
.wheel-spoke:nth-child(2) { transform: rotate(30deg); }
.wheel-spoke:nth-child(3) { transform: rotate(60deg); }
.wheel-spoke:nth-child(4) { transform: rotate(90deg); }
.wheel-spoke:nth-child(5) { transform: rotate(120deg); }
.wheel-spoke:nth-child(6) { transform: rotate(150deg); }
.wheel-spoke:nth-child(7) { transform: rotate(180deg); }
.wheel-spoke:nth-child(8) { transform: rotate(210deg); }
.wheel-spoke:nth-child(9) { transform: rotate(240deg); }
.wheel-spoke:nth-child(10) { transform: rotate(270deg); }
.wheel-spoke:nth-child(11) { transform: rotate(300deg); }
.wheel-spoke:nth-child(12) { transform: rotate(330deg); }
`;

// Ajouter le CSS à la page
$('head').append(`<style>${wheelSmokeCSS}</style>`);

// Mettre à jour le client.lua avec ces nouvelles tables
// Ajouter ces tables dans la partie supérieure de votre fichier client.lua
/*
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
*/


  // Fonction pour générer dynamiquement les éléments de l'interface pour les extras
  function generateExtrasUI() {
    $("#extras-container").empty();

    // Ajouter un titre
    $("#extras-container").append(`<div class="section-title">Extras</div>`);

    // Si aucun extra n'est disponible
    const extras = vehicleData.extras || {};
    if (Object.keys(extras).length === 0) {
      $("#extras-container").append(
        `<div class="mod-item-title2" style="margin: 20px 0; text-align: center;">Aucun extra disponible pour ce véhicule</div>`
      );
      return;
    }

    // Générer un toggle pour chaque extra
    for (const extraId in extras) {
      const isEnabled = extras[extraId];

      const extraToggle = `
        <div class="extra-toggle" data-extra="${extraId}">
            <div class="extra-toggle-btn ${
              isEnabled ? "active" : ""
            }" id="extra-toggle-${extraId}"></div>
            <div class="extra-toggle-label">Extra ${extraId}</div>
        </div>
      `;

      $("#extras-container").append(extraToggle);

      // Gestionnaire d'événement
      $(`#extra-toggle-${extraId}`).click(() => {
        const isActive = $(`#extra-toggle-${extraId}`).hasClass("active");
        if (isActive) {
          $(`#extra-toggle-${extraId}`).removeClass("active");
          applyModification("extra", 0, extraId);
        } else {
          $(`#extra-toggle-${extraId}`).addClass("active");
          applyModification("extra", 1, extraId);
        }
      });
    }
  }

  function updateColorValueDisplays(type, colorId) {
    // Trouve la couleur GTA correspondant à l'ID
    const colorObj = findGTAColorById(colorId);
    if (!colorObj) return;

    // Obtient les valeurs RGB à partir de la couleur hex
    const rgb = hexToRgb(colorObj.color);
    if (!rgb) return;

    // Met à jour les sliders et les valeurs affichées si elles existent
    if ($(`#${type}-r-slider`).length) {
      $(`#${type}-r-slider`).val(rgb[0]);
      $(`#${type}-g-slider`).val(rgb[1]);
      $(`#${type}-b-slider`).val(rgb[2]);

      $(`#${type}-r-value`).text(rgb[0]);
      $(`#${type}-g-value`).text(rgb[1]);
      $(`#${type}-b-value`).text(rgb[2]);

      const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);
      $(`#${type}-hex-value`).val(hex);

      const hsb = rgbToHsb(rgb[0], rgb[1], rgb[2]);
      $(`#${type}-h-value`).val(hsb[0]);
      $(`#${type}-s-value`).val(hsb[1]);
      $(`#${type}-b-value`).val(hsb[2]);

      // Met à jour l'aperçu de couleur
      $(`#${type}-preview`).css("background-color", colorObj.color);
    }
  }

  // Fonction pour générer dynamiquement les éléments de l'interface pour les portes
  function generateDoorsUI() {
    $("#doors-container").empty();

    // Ajouter un titre
    $("#doors-container").append(`<div class="section-title">Portes</div>`);

    // Tableau des portes disponibles
    const doors = [
      { id: 0, name: "Porte conducteur" },
      { id: 1, name: "Porte passager" },
      { id: 2, name: "Porte arrière gauche" },
      { id: 3, name: "Porte arrière droite" },
      { id: 4, name: "Capot" },
      { id: 5, name: "Coffre" },
    ];

    // Générer un toggle pour chaque porte
    for (const door of doors) {
      const doorToggle = `
        <div class="extra-toggle" data-door="${door.id}">
            <div class="extra-toggle-btn" id="door-toggle-${door.id}"></div>
            <div class="extra-toggle-label">${door.name}</div>
        </div>
      `;

      $("#doors-container").append(doorToggle);

      // Gestionnaire d'événement
      $(`#door-toggle-${door.id}`).click(() => {
        const isActive = $(`#door-toggle-${door.id}`).hasClass("active");
        if (isActive) {
          $(`#door-toggle-${door.id}`).removeClass("active");
          // Envoyer l'ordre de fermer la porte
          $.post(
            "https://custom/toggleDoor",
            JSON.stringify({
              doorId: door.id,
              open: false,
            })
          );
        } else {
          $(`#door-toggle-${door.id}`).addClass("active");
          // Envoyer l'ordre d'ouvrir la porte
          $.post(
            "https://custom/toggleDoor",
            JSON.stringify({
              doorId: door.id,
              open: true,
            })
          );
        }
      });
    }
  }

  // Fonction pour changer le niveau de modification
  function changeModLevel(category, change) {
    let data;

    // Déterminer la catégorie et récupérer les données
    if (
      category === "engine" ||
      category === "brakes" ||
      category === "transmission" ||
      category === "suspension" ||
      category === "armor"
    ) {
      data = performanceCategories[category];
    } else if (exteriorCategories[category]) {
      data = exteriorCategories[category];
    } else if (interiorCategories[category]) {
      data = interiorCategories[category];
    } else if (category === "frontWheel" || category === "backWheel") {
      data = wheelCategories[category];
    }

    if (!data) {
      console.error(`No data found for category: ${category}`);
      return;
    }

    let currentLevel = data.current || 0;
    let maxLevel = data.maxLevel || 0;

    let newLevel = currentLevel + change;

    // Vérifier les limites
    if (newLevel < 0) newLevel = 0;
    if (newLevel > maxLevel) newLevel = maxLevel;

    // Mettre à jour si changement
    if (newLevel !== currentLevel) {
      // Mettre à jour la donnée locale
      data.current = newLevel;

      // Mettre à jour l'interface
      updateModUI(category, newLevel);

      // Appliquer la modification au véhicule via NUI
      applyModification(category, newLevel);
    }
  }

  // Fonction pour changer la teinture des vitres
  function changeWindowTint(change) {
    let currentTint = windowTints.findIndex((tint) => tint.active);
    if (currentTint === -1) currentTint = 0;

    let newTint = currentTint + change;

    // Vérifier les limites
    if (newTint < 0) newTint = 0;
    if (newTint >= windowTints.length) newTint = windowTints.length - 1;

    // Mettre à jour si changement
    if (newTint !== currentTint) {
      // Désactiver l'ancien tint
      if (currentTint >= 0 && currentTint < windowTints.length) {
        windowTints[currentTint].active = false;
      }

      // Activer le nouveau tint
      windowTints[newTint].active = true;

      // Mettre à jour l'interface
      $("#windowTint-level").text(windowTints[newTint].name);

      // Calculer la position du slider
      const lineWidth = 260;
      const position = (newTint / (windowTints.length - 1)) * lineWidth;
      $("#windowTint-slider").css("left", 45 + position);

      // Appliquer la modification au véhicule via NUI
      applyModification("windowTint", windowTints[newTint].id);
    }
  }

  // Fonction pour changer le type de roues
  function changeWheelType(change) {
    const types = wheelCategories.wheelType.types;
    let currentType = types.findIndex((type) => type.active);
    if (currentType === -1) currentType = 0;

    let newType = currentType + change;

    // Vérifier les limites
    if (newType < 0) newType = 0;
    if (newType >= types.length) newType = types.length - 1;

    // Mettre à jour si changement
    if (newType !== currentType) {
      // Désactiver l'ancien type
      if (currentType >= 0 && currentType < types.length) {
        types[currentType].active = false;
      }

      // Activer le nouveau type
      types[newType].active = true;

      // Mettre à jour l'interface
      $("#wheelType-level").text(types[newType].name);

      // Calculer la position du slider
      const lineWidth = 260;
      const position = (newType / (types.length - 1)) * lineWidth;
      $("#wheelType-slider").css("left", 45 + position);

      // Appliquer la modification au véhicule via NUI
      applyModification("wheelType", types[newType].id);
    }
  }

  // Fonction pour configuration des onglets de couleur

  // Fonction pour trouver la couleur GTA la plus proche d'une valeur RGB
  function findClosestGTAColor(r, g, b, paintType) {
    // Déterminer quelle collection utiliser en fonction du type de peinture
    let colorsToCheck = [];

    paintType = parseInt(paintType || 0);

    switch (paintType) {
      case 0: // Normal
        colorsToCheck = window.vehicleColors.standard;
        break;
      case 1: // Métallique
      case 2: // Nacré
        colorsToCheck = window.vehicleColors.metallic;
        break;
      case 3: // Mat
        colorsToCheck = window.vehicleColors.matte;
        break;
      case 4: // Metal/Brossé
        colorsToCheck = window.vehicleColors.metal;
        break;
      case 5: // Chrome
        return { id: 120, name: "Chrome", color: "#DBDBDB" };
      default:
        colorsToCheck = window.vehicleColors.standard;
    }

    let closestColor = colorsToCheck[0];
    let minDistance = Number.MAX_VALUE;

    for (const color of colorsToCheck) {
      const colorRgb = hexToRgb(color.color);

      // Calculer la distance de couleur (formule pondérée)
      const rDiff = r - colorRgb[0];
      const gDiff = g - colorRgb[1];
      const bDiff = b - colorRgb[2];

      const distance = Math.sqrt(
        rDiff * rDiff * 0.299 + gDiff * gDiff * 0.587 + bDiff * bDiff * 0.114
      );

      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }

    return closestColor;
  }

  function setupAutoColorApplication() {
    // Pour les couleurs primaires
    $(".color-item[data-type='primary']").on("click", function () {
      $(".color-item[data-type='primary']").removeClass("active selected");
      $(this).addClass("active selected");
      const selectedColor = parseInt($(this).data("color"));
      applyModification("primaryColor", selectedColor);

      // Animation et notification
      const colorName = $(this).attr("title");
      showNotification(`Couleur primaire: ${colorName || "Couleur"}`);
    });

    // Pour les couleurs secondaires
    $(".color-item[data-type='secondary']").on("click", function () {
      $(".color-item[data-type='secondary']").removeClass("active selected");
      $(this).addClass("active selected");
      const selectedColor = parseInt($(this).data("color"));
      applyModification("secondaryColor", selectedColor);

      // Animation et notification
      const colorName = $(this).attr("title");
      showNotification(`Couleur secondaire: ${colorName || "Couleur"}`);
    });

    // Pour les couleurs nacrées
    $(".color-item[data-type='pearl']").on("click", function () {
      $(".color-item[data-type='pearl']").removeClass("active selected");
      $(this).addClass("active selected");
      const selectedColor = parseInt($(this).data("color"));
      applyModification("pearlColor", selectedColor);

      // Animation et notification
      const colorName = $(this).attr("title");
      showNotification(`Couleur nacrée: ${colorName || "Couleur"}`);
    });

    // Pour les couleurs de xenon
    $(".xenon-color").on("click", function () {
      $(".xenon-color").removeClass("active selected");
      $(this).addClass("active selected");
      const colorId = parseInt($(this).data("color"));
      applyModification("xenonColor", colorId);

      // Activer les xenons si pas déjà actifs
      if (!$("#xenon-main-toggle").hasClass("active")) {
        $("#xenon-main-toggle").addClass("active");
        applyModification("xenon", 1);
      }

      // Animation et notification
      const colorName = $(this).find("span").text();
      showNotification(`Couleur de xenon: ${colorName}`);
    });

    // Pour les teintes de vitres
    $(".tint-option").on("click", function () {
      $(".tint-option").removeClass("active selected");
      $(this).addClass("active selected");
      const tintId = parseInt($(this).data("tint-id"));
      applyModification("windowTint", tintId);

      // Animation et notification
      const tintName = $(this).find(".tint-name").text();
      showNotification(`Teinte des vitres: ${tintName}`);
    });

    // Pour le sélecteur de couleur RVB
    setLiveColorPreview("primary");
    setLiveColorPreview("secondary");
  }

  // Fonction pour mettre à jour l'interface d'un mod
  function updateModUI(category, level) {
    // Mettre à jour le texte du niveau
    $(`#${category}-level`).text(level === 0 ? "Aucun" : "Niveau " + level);

    // Déterminer le niveau max
    let maxLevel = 1;
    let data;

    if (
      category === "engine" ||
      category === "brakes" ||
      category === "transmission" ||
      category === "suspension" ||
      category === "armor"
    ) {
      data = performanceCategories[category];
    } else if (exteriorCategories[category]) {
      data = exteriorCategories[category];
    } else if (interiorCategories[category]) {
      data = interiorCategories[category];
    } else if (category === "frontWheel" || category === "backWheel") {
      data = wheelCategories[category];
    }

    if (data) {
      maxLevel = data.maxLevel || 1;
    }

    // Calculer la position du slider
    const lineWidth = 260;
    const position = maxLevel > 0 ? (level / maxLevel) * lineWidth : 0;

    $(`#${category}-slider`).css("left", 45 + position);
  }

  // Boutons de rotation du véhicule
  $("#rotate-left").click(() => {
    $.post(
      "https://custom/rotate",
      JSON.stringify({
        direction: "left",
      })
    );
  });

  $("#rotate-right").click(() => {
    $.post(
      "https://custom/rotate",
      JSON.stringify({
        direction: "right",
      })
    );
  });

  // Gestion des touches du clavier pour la rotation
  $(document).keydown(function (e) {
    if (e.key === "ArrowLeft") {
      $.post(
        "https://custom/rotate",
        JSON.stringify({
          direction: "left",
        })
      );
    } else if (e.key === "ArrowRight") {
      $.post(
        "https://custom/rotate",
        JSON.stringify({
          direction: "right",
        })
      );
    }
  });

  // Boutons de confirmation et d'annulation
  $("#confirm-btn").click(() => {
    $.post(
      "https://custom/exit",
      JSON.stringify({
        apply: true,
      })
    );
  });

  $("#cancel-btn").click(() => {
    $.post(
      "https://custom/exit",
      JSON.stringify({
        apply: false,
      })
    );
  });

  // Gestion des menus de navigation
  $("#perf-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des performances
    $("#performance-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#perf-btn").addClass("active");
    // Générer l'UI des performances
    generatePerformanceUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "performance",
      })
    );
  });

  $("#ext-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur de l'extérieur
    $("#exterior-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#ext-btn").addClass("active");
    // Générer l'UI de l'extérieur
    generateExteriorUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "exterior",
      })
    );
  });

  $("#int-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur de l'intérieur
    $("#interior-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#int-btn").addClass("active");
    // Générer l'UI de l'intérieur
    generateInteriorUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "interior",
      })
    );
  });

  $("#color-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des couleurs
    $("#color-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#color-btn").addClass("active");
    // Générer l'UI des couleurs
    generateColorUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "color",
      })
    );
  });

  $("#roues-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des roues
    $("#wheels-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#roues-btn").addClass("active");
    // Générer l'UI des roues
    generateWheelsUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "wheels",
      })
    );
  });

  $("#extra-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des extras
    $("#extras-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#extra-btn").addClass("active");
    // Générer l'UI des extras
    generateExtrasUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "extras",
      })
    );
  });

  $("#portes-btn").click(() => {
    // Masquer tous les conteneurs
    $(".modif").hide();
    // Afficher le conteneur des portes
    $("#doors-container").show();
    // Mettre à jour la classe active
    $(".liste > div").removeClass("active");
    $("#portes-btn").addClass("active");
    // Générer l'UI des portes
    generateDoorsUI();
    // Envoyer le changement de catégorie
    $.post(
      "https://custom/changeCategory",
      JSON.stringify({
        category: "doors",
      })
    );
  });

  window.addEventListener("message", function (event) {
    const data = event.data;

    if (data.action === "open") {
      // Réinitialiser les données avec celles reçues
      if (data.performanceCategories) {
        performanceCategories = data.performanceCategories;
      }
      if (data.exteriorCategories) {
        exteriorCategories = data.exteriorCategories;
      }
      if (data.interiorCategories) {
        interiorCategories = data.interiorCategories;
      }
      if (data.colorCategories) {
        colorCategories = data.colorCategories;
      }
      if (data.wheelCategories) {
        wheelCategories = data.wheelCategories;
      }
      if (data.windowTints) {
        windowTints = data.windowTints;
      }
      if (data.wheelSmokeColors) {
        wheelSmokeColors = data.wheelSmokeColors;
      }

      // Mettre à jour les données du véhicule
      if (data.vehicleData) {
        vehicleData = data.vehicleData;
        console.log("Données véhicule reçues:", vehicleData);
      }

      // Afficher le menu
      $("#customMenu").show();
      $("#rotation-controls").show();

      // Activer le menu performance par défaut
      $("#perf-btn").click();
    } else if (data.action === "close") {
      $("#customMenu").hide();
      $("#rotation-controls").hide();
    } else if (data.action === "updatePrice") {
      $("#price").text("$" + data.price);
    }
  });
});