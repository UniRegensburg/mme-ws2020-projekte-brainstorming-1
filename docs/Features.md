# Features für BrainBoard

| Feature | Beschreibung | Priorität | Geschätzter Aufwand | Betroffene Schichten |
|---------|--------------|-----------|--------------------|---------------------|
| **Kollaboratives Arbeiten** | Mehrere Nutzer können gleichzeitig auf das Whiteboard zugreifen und darauf arbeiten. | kritisch | 7 - 8 Tage | Backend, Server-Client-Kommunikation |
| **Whiteboard** | Das Whiteboard wird über das Eingabefenster, das beim Öffnen der Anwendung eingeblendet wird, angelegt. Der Nutzer beginnt das Brainstorming auf einem leeren Whiteboard.| kritisch | 7 Tage | Frontend, Canvas Rendering, User Interface |
| **Zugangscode** | Der Nutzer kann über einen Button den Zugangscode in die Zwischenablage kopieren, um anderen Nutzern den Zugang zum Whiteboard zu ermöglichen. | kritisch | 3 Tage | Backend, User Interface |
| **Textboxen** | Auf dem Whiteboard können Textboxen eingefügt werden. Die Textboxen können erstellt, editiert (Größe, Text, Farbe) und gelöscht werden und mit verschiedenen Farben hinterlegt werden. | kritisch | 4 Tage | Frontend, Canvas Rendering, User Interface |
| **Benutzername** | Der Nutzer gibt sich einen Namen. Die anderen Nutzer sehen die Namen der Nutzer, die gerade am Whiteboard arbeiten | mittel | 2 Tage | Backend, Frontend, Canvas Rendering, User Interface |
| **Export** | Das erstellte Whiteboard kann als JPG exportiert werden. | hoch | 5 Tage | Backend, User Interface |
| **Timer** | Der Nutzer hat die Möglichkeit, für die laufende Session einen Timer zu stellen. Nach Ablauf des Timers wird ein Pop-up angezeigt, das den Nutzer informiert, dass die Zeit abgelaufen ist. | mittel | 3 Tage | Frontend, Canvas Rendering, User Interface |
| **Bilder einfügen** | Der Nutzer hat die Möglichkeit, Bilder auf das Whiteboard zu importieren. | nice-to-have | 3 Tage | Frontend, Backend, Canvas Rendering, User Interface |
| **Formen (Kreis, Rechtecke, Pfeile)** | Der Nutzer kann zur Strukturierung der Gedanken Kreise, Rechtecke und Pfeile in verschiedenen Farben einfügen. | nice-to-have | 4 Tage | Frontend, Canvas Rendering, User Interface |
| **Ansicht** | Der Nutzer kann die Ansicht individuell anpassen. Hierfür kann eine Zoom-Funktion sowie eine Pan-Funktion, mit der der Bildausschnitt angepasst werden kann, verwendet werden. | nice-to-have | 7 Tage | Frontend, Canvas Rendering, User Interface |
| **Freihand zeichnen** | Der Nutzer kann freihand auf das Whiteboard zeichnen. Die Zeichnungen können wieder gelöscht werden. | nice-to-have | 5 Tage | Frontend, Canvas Rendering, User Interface |




## Umsetzung

1. Zunächst wird das Whiteboard, auf das die Nutzer später gemeinsam zugreifen können, implementiert.
2. Die grundlegenden Features zur Arbeit auf dem Whiteboard werden umgesetzt (Textboxen, Formen, Freihand zeichnen, ...).
3. Der gemeinsame Zugriff auf das Whiteboard wird ermöglicht. Dies wird über einen Zugangscode erreicht, den der Nutzer in die Zwischenablage kopieren kann.
4. Die restlichen Features werden nach Gewichtung geordnet umgesetzt.

Diese Reihenfolge wurde gewählt, da zuerst die grundlegenden Funktionen (1.-3.) der Anwendung umgesetzt werden sollen. Anschließend wird die Anwendung um Features erweitert, die auf den Grundfunktionen aufbauen oder diese erweitern. 1.-3. sollten einzeln immer weitestgehend umgesetzt sein, bevor bei 4. parallel an der Umsetzung der Features gearbeitet werden kann.
