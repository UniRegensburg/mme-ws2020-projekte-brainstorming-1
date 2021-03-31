# Software Design für BrainBoard

## APIs und Bibliotheken:  
Canvas: http://fabricjs.com/   
Kommunikation: https://colyseus.io/  
Design und Icons:https://material.io/  

## Ordnerstruktur:  
### js  
    index.js  
    ObjectMenue.js  
#### tools  
    arrow.js  
    circle.js  
    color.js  
    download.js  
    freedraw.js  
    image.js 
    pan.js  
    rect.js  
    textbox.js  
    zoom.js  
#### utils  
    canvas.js  
    Client.js  
    config.js  
    connect.js  
    timerClient.js     
### server  
    AppServer.js  
    drawingRoom.js  
    timerServer.js  

## Funktionen:  
arrow: erstellt Pfeile; blendet das entsprechende Untermenü ein  
circle: erstellt Ellipsen; blendet das entsprechende Untermenü ein  
color: übergibt die selektierte Farbe an andere Klassen; blendet das entsprechende Untermenü ein  
download: downloaded den aktuellen Stand des Whiteboards als png  
freedraw: erstellt Freihandzeichnungen; blendet das entsprechende Untermenü ein  
image: importiert ein Bild vom PC des Nutzers  
pan: regelt die Pan Funktion  
rect: erstellt Rechtecke; blendet das entsprechende Untermenü ein  
textbox: erstellt Textboxen; blendet das entsprechende Untermenü ein  
zoom: regelt den Zoom des Canvas  
canvas: erstellt das Canvas Element; achtet dadrauf, ob Objekte auf dem Canvas hinzugefügt, gelöscht oder modifiziert werden  
config: definiert Konstanten  
connect: öffnet und verwaltet das Anfangsmodal und das Einladungsmodal  
timerClient: regelt die clientseitigen Aktionen des Timers  
index: zentrale Stelle zur Verwaltung aller Module; initialisiert UI-Elemente  
ObjectMenue: regelt die Aktionen, die mit selektierten Objekten durchgeführt werden können (Farbe ändern, Dublizieren, in den Vordergrund schieben, in den Hintergrund schieben, löschen); blendet das entsprechende Menü ein  
AppServer: erstellt und startet den Server  
drawingRoom: regelt severseitige Aktionen  
timerServer: regelt die severseitigen Aktionen des Timers  
