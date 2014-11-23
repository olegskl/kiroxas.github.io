'use strict';

/**
 * List of tasks to accomplish.
 *
 * Fields:
 *   task.title (mandatory) - the actual task title, keep it short!
 *   task.photo (optional) - image URL, non-empty string means task is DONE
 *   task.photo1x (optional) - image URL for low-resolution displays
 *   task.photo2x (optional) - image URL for high-resolution displays
 *
 * Notes:
 *   1. Avoid long titles, they don't fit well!
 *   2. Both `photo1x` and `photo2x` are optional - `photo` is used as fallback.
 *      Their presence is necessary to reduce bandwidth and to speedup the
 *      loading of individual photos;
 */
angular.module('Alice').value('taskList', [
    {
        title: 'Avoir une fête de départ réussie',
        photo: './Photos/soiree.JPG',
        photo1x: './Photos/1x/soiree.JPG',
        photo2x: './Photos/2x/soiree.JPG'
    },
    {
        title: 'Arriver au Japon',
        photo: './Photos/arrivee.JPG',
        photo1x: './Photos/1x/arrivee.JPG',
        photo2x: './Photos/2x/arrivee.JPG'
    },
    {
        title: 'Alice achete sa 1ère boisson au distributeur',
        photo: './Photos/distributeur.JPG',
        photo1x: './Photos/1x/distributeur.JPG',
        photo2x: './Photos/2x/distributeur.JPG'
    },
    {
        title: 'Photo avec une bouteille de whisky japonais',
        photo: null
    },
    {
        title: 'Faire du Taiko no Tatsujin dans une salle d\'arcade',
        photo: './Photos/game.JPG',
        photo1x: './Photos/1x/game.JPG',
        photo2x: './Photos/2x/game.JPG'
    },
    {
        title: 'Une photo devant le mont Fuji',
        photo: null
    },
    {
        title: 'Guillaume en Sumo',
        photo: null
    },
    {
        title: 'Alice en Geisha',
        photo: null
    },
    {
        title: 'Photo de WC bizzare',
        photo: null
    },
    {
        title: 'Photo de Sumo',
        photo: './Photos/sumo.JPG',
        photo1x: './Photos/1x/sumo.JPG',
        photo2x: './Photos/2x/sumo.JPG'
    },
    {
        title: 'Alice en Hello Kitty',
        photo: null
    },
    {
        title: 'Photo avec un Shiba',
        photo: null
    },
    {
        title: 'Boire du Nigori à la santé de Rémi',
        photo: './Photos/nigori.JPG'
    },
    {
        title: 'Faire voyager l\'oeuf du CNJ',
        photo: null
    },
    {
        title : 'Faire les supporters du FC Nantes',
        photo : './Photos/nantes.JPG',
        photo1x : './Photos/1x/nantes.JPG',
        photo2x : './Photos/2x/nantes.JPG'
    },
    {
        title: 'Faire une photo avec Mega Dracaufeu',
        photo: null
    },
    {
        title: 'Rencontre avec une Ganguro',
        photo: null
    },
    {
        title: 'Faire une session de Purikura',
        photo: null
    },
    {
        title: 'Alice fait un Ringo Tsutsumi',
        photo: null
    },
    {
        title: 'Guillaume fait un Yotsu Musubi',
        photo: null
    },
    {
        title: 'Une partie de Go contre un Japonais',
        photo: null
    }
]);
