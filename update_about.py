#!/usr/bin/env python3
# -*- coding: utf-8 -*-

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Trouver la section à remplacer (de ligne 75 à 105)
# Remplacer toute la section de "col-contenu float-right" jusqu'à sa fermeture

new_content = []
in_section = False
section_start = -1

for i, line in enumerate(lines):
    if '<div class="col-contenu float-right">' in line:
        in_section = True
        section_start = i
        # Insérer le nouveau contenu
        new_content.append('        <div class="about-content">\n')
        new_content.append('            <div class="about-text">\n')
        new_content.append('                <p class="about-intro"><strong>Développeuse mobile &amp; web</strong>, je suis passionnée par l\'impact social à travers la technologie.</p>\n')
        new_content.append('\n')
        new_content.append('                <p>Originaire du Cameroun et actuellement basée au Cameroun, j\'ai commencé ma carrière en tant que développeuse mobile spécialisée dans <strong>Flutter</strong> et <strong>Dart</strong>. Avec plus de 3 ans d\'expérience, j\'ai créé plusieurs applications mobiles pour des entreprises locales et internationales, en mettant l\'accent sur l\'expérience utilisateur et la performance.</p>\n')
        new_content.append('\n')
        new_content.append('                <p>Après avoir exploré les possibilités du développement backend avec <strong>Django</strong> et <strong>Python</strong>, j\'ai élargi mes compétences au développement web full-stack. Je maîtrise maintenant <strong>HTML5</strong>, <strong>CSS3</strong> et <strong>JavaScript</strong> pour créer des interfaces web modernes et responsive.</p>\n')
        new_content.append('\n')
        new_content.append('                <p>Au-delà du code, je suis convaincue que la technologie doit servir l\'humain. Chaque projet est une opportunité de créer des solutions significatives qui facilitent la vie des gens. Je travaille avec passion, rigueur et un engagement envers l\'excellence.</p>\n')
        new_content.append('\n')
        new_content.append('                <h3 class="about-services">Aujourd\'hui, j\'accompagne les entreprises et les startups dans :</h3>\n')
        new_content.append('                <ul class="about-list">\n')
        new_content.append('                    <li><strong>Développement d\'applications mobiles</strong> avec Flutter pour iOS et Android</li>\n')
        new_content.append('                    <li><strong>Création de sites web</strong> modernes et optimisés pour tous les appareils</li>\n')
        new_content.append('                    <li><strong>Consultation en architecture mobile</strong> pour améliorer vos solutions existantes</li>\n')
        new_content.append('                    <li><strong>Formation et mentorat</strong> pour les développeurs en herbe</li>\n')
        new_content.append('                </ul>\n')
        new_content.append('\n')
        new_content.append('                <p class="about-approach"><strong>Mon approche est simple :</strong><br/>\n')
        new_content.append('                Comprendre vos objectifs &mdash; Proposer des solutions adaptées &mdash; Livrer un produit de qualité &mdash; Assurer votre satisfaction.</p>\n')
        new_content.append('            </div>\n')
        new_content.append('        </div>\n')
    elif in_section and '</div>' in line and 'float-right' not in line and i > section_start + 5:
        # C'est la fermeture de la section float-right
        in_section = False
        # Ne pas ajouter cette ligne, on a déjà fermé nos divs
        continue
    elif not in_section:
        new_content.append(line)

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_content)

print('✓ About section updated successfully!')
