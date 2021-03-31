## App

Im Rahmen dieses Projekts wurde eine Webanwendung entworfen, die Nutzer und Nutzerinnen beim gemeinsamen Brainstorming unterstützt. Der Fokus der Anwendung liegt auf der Intuitivität in der Verwendung, sowie dem schnellen und unbeschwerlichen Zugang zur Anwendung (da z.B. keine Anmeldung erforderlich ist). Die Usability und Gestaltung standen ebenfalls im Zentrum der Überlegungen. Die Zielgruppe bilden die Casual User, die bei der spontanen, gemeinschaftlichen Ideenfindung auf ein unterstützendes Tool zurückgreifen wollen.

Für eine sinnvolle Nutzung der Anwendung wird davon ausgegangen, dass zusätzlich eine externe Plattform zur Kommunikation via Voice- bzw. Video-Chat genutzt wird. Dies bietet erst die Möglichkeit zum effektiven Brainstorming, da Denkanstöße gegeben und Ideen von Nutzern und Nutzerinnen diskutiert werden können. Es kann daher von einer gewissen Technikaffinität der Zielgruppe ausgegangen werden. 
<br>
<br>
## Umgesetzte Funktionen

![image of modal](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/screenshots/modal.jpg)

Die Nutzer und Nutzerinnen starten beim Öffnen der Anwendung bei dem im Bild oben angezeigten Fenster. Über die Betätigung des "Create a new board"-Buttons wird ein neues Whiteboard erstellt. Um zur Bearbeitung eines bereits existierenden Boards hinzuzustoßen, wird der Zugangscode in das dafür vorgesehene Feld "access code" eingegeben und anschließend der Button "Join an existing board" geklickt.
<br>
<br>
<br>
![gif of access code modal](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/gifs/access-code.gif)

Über den "invite"-Button neben dem Logo öffnet sich ein Fenster, in dem der Zugangscode für den Beitritt zum Whiteboard angezeigt wird. Mithilfe des Buttons "copy to clipboard" wird der Zugangscode in die Zwischenablage gespeichert. Mit dem Klick auf den "export"-Button startet automatisch der Download des Whiteboards als PNG. Das Informationsfeld, das beim Hovern über den "info"-Button erscheint, enthält die Erklärung zur Verwendung der Pan-Funktion.
<br>
<br>
<br>
![gif of toolbar and submenus](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/gifs/toolbar.gif)

Über den obersten Button legt der Nutzer bzw. die Nutzerin die Farbe fest, in der die anschließend erstellten Elemente (Textboxen, Formen, ...) dargestellt werden sollen. Der "selection"-Button dient dazu, in den Selektionsmodus des Cursors zurückzukehren, nachdem z.B. eine Freihandzeichnung erstellt wurde. Mit dem Klick auf die Buttons "textbox", "draw", "circle", "rectangle" und "arrow" öffnen sich Untermenüs, in denen verschiedenste Aktionen zur Erstellung von Textboxen, Freihandzeichnungen und Formen ausgewählt werden können. Über den untersten Button können Bilder aus den lokalen Dateien des Nutzers bzw. der Nutzerin auf das Whiteboard importiert werden. 
<br>
<br>
<br>
![gif of textbox creation](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/gifs/textbox.gif)

Mit einem Klick auf den "textbox"-Button öffnet sich das dazugehörige Untermenü, das die Auswahl zwischen einer farblich hinterlegten und einer transparenten Textbox mit farbiger Schrift bietet. Zusätzlich kann die Textgröße voreingestellt werden.
<br>
<br>
<br>
![gif of draw usage](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/gifs/draw.gif)

Im Untermenü zum Freihandzeichnen kann der Nutzer bzw. die Nutzerin zwischen einem "normalen" Stift und einem Marker (leicht transparent) wählen, sowie die Linienstärke festlegen.
<br>
<br>
<br>
![gif of form creation](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/gifs/form.gif)

Bei der Erstellung der Formen kann in den Untermenüs der Kreise und Rechtecke zwischen umrandeten und ausgefüllten Formen gewählt werden. Kreise und Rechtecke werden durch das Aufziehen mit der Maus erzeugt. Im Untermenü der Pfeile werden dem Nutzer bzw. der Nutzerin drei verschiedene Arten von Pfeilen angeboten. 
<br>
<br>
<br>
![image of image import](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/screenshots/image%20import.jpg)

Über den "upload picture"-Button kann der Nutzer bzw. die Nutzerin ein Bild aus den lokalen Dateien auf das Whiteboard importieren.
<br>
<br>
<br>
![gif of object menu usage](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/gifs/object-menue.gif)

Oben werden exemplarisch die Editiermöglichkeiten der Objekte gezeigt. Selektierte Objekte können neu eingefärbt, dupliziert, in den Vordergrund bzw. Hintergrund verschoben und gelöscht werden. 
<br>
<br>
<br>
![gif of timer usage](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/gifs/timer.gif)

Der Nutzer bzw. die Nutzerin hat die Möglichkeit einen Timer während des Brainstormings mitlaufen zu lassen. Es kann zwischen 15, 30 und 45 Minuten gewählt werden. Nach Ablauf der Zeit erscheint ein Pop-up, das den Nutzer bzw. die Nutzerin darüber informiert. 
<br>
<br>
<br>
![gif of zoom and pan usage](https://github.com/UniRegensburg/mme-ws2020-projekte-brainstorming-1/blob/Dev/docs/assets/gifs/zoom-and-pan.gif)

Zur individuellen Anpassung der Ansicht können Zoom und Pan genutzt werden. Gezoomt werden kann mit dem Mausrad bzw. mit dem Touchpad oder über den Klick auf die Zoom-Buttons unten rechts. Der unterste Button lässt den Nutzer bzw. die Nutzerin zur ursprünglichen Zoom-Einstellung (100%) zurückkehren. Der Pan funktioniert über das Gedrückthalten von strg + Maus (die Information zur Funktionsweise ist im Informationsfeld neben dem "export"-Button festgehalten).
<br>
<br>
## Abweichungen von den geplanten Funktionen

Die ursprünglich geplanten Funktionen wurden mit Ausnahme des Benutzernamens umgesetzt. Im Verlauf des Projekts wurde deutlich, dass die Vergabe und Anzeige von Benutzernamen initial zu hoch priorisiert wurde. Da - wie oben bereits erwähnt - davon ausgegangen wird, dass während der Verwendung parallel ein externer Kommunikationskanal zum Austausch genutzt wird, ist bekannt, welche Teilnehmer sich in der laufenden Brainstorming-Session befinden. Die Anzeige der Benutzernamen würde zudem weiteren Platz auf dem Bildschirm beanspruchen, der stattdessen für die Bearbeitung genutzt werden kann. 
