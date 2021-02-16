# Software Design für BrainBoard

[Beschreiben Sie hier die intendierte Code-Struktur Ihrer Anwendung. Notieren Sie wesentliche Module oder Konzepte, entlang derer sich Ihre Anwendung strukturieren lässt. Gehen Sie dabei auch auf grundlegende Architekturen, z.B. die Unterscheidung von Server- und Client-Anwendung ein und beschreiben Sie die Art und Weise, wie Teilkomponenten miteinander kommunizieren werden. Entwerfen Sie Strukturen und Vorgaben für zentrale Datenobjekte und geben Sie an, welche Teilbereiche der Anwendung unter Verwendung externe APIs oder Bibliotheken umgesetzt werden sollen. Erweitern und Überarbeiten Sie dieses Dokument im Verlauf des Projektes. Hier soll stets eine aktuelle Dokumentation des aktuell geplanten bzw. umgesetzten Software Designs einsehbar sein.]

Für UI Elemente gibt es eine Creator Klasse, die das Element erstellt und eine Manager Klasse, die das Element updatet.

APIs und Bibliotheken:
Canvas: http://fabricjs.com/ 
Kommunikation: https://lance.gg/#quickstart oder https://colyseus.io/
Design:https://material.io/develop/web/getting-started

index.js

Utils  
oberservable.js  
eventManager.js  

UI  
boardCreator.js  
textboxCreator.js  
pictureImporter.js  
drawCreator.js    
timer.js  
menue.js  

Tools  
export.js  
boardManager.js  
textboxManager.js  
pictureManager.js  
drawManager.js  
viewManager.js  

index: zentrale Stelle zur Verwaltung aller Module; enthält init Funktionen  
oberservable: lauscht auf interessante Events; wie bei Studienleistungen  
eventManager: reagiert auf Events  
boardCreator: erstellt das leere Whiteboard mit eingegebenen Nutzernamen, Board-Titel und Werkzeugleiste  
boardManager: updatet das Whiteboard  
textboxCreator: erstellt eine Textbox mit mini-Menü (zur Einstellung von Schriftfarbe und Hintergrundfarbe)  
textboxManager: updatet die Textboxen  
pictureImporter: importiert ein Bild vom Rechner des Nutzers; (z.B. als drag and drop)  
pictureManager: updatet Bilder  
drawCreator: erstellt eine Freihand Zeichnung  
drawManager: updatet Freihand Zeichnungen  
viewManager: regelt den Zoom  
timer: erstellt den Timer und überwacht dessen Ablauf; schickt Pop-up Nachricht nach dessen Ablauf  
export: exportiert das Whiteboard (z.B. als PDF oder JPEG)  
menue: erstellt die Werkzeugleiste  
