# Features für BrainBoard

Notieren und beschreiben Sie hier alle wesentlichen Funktionen bzw. *Features* Ihrer Anwendung. Seien Sie möglichst ausführlich in der Dokumentation und beachten Sie für die Erläuterungen ("Beschreibung") die Perspektive Ihrer NutzerInnen. Schätzen Sie initial den wahrscheinlichen Aufwand - auch um diese Schätzung am Ende des Projekts mit dem tatsächlichen Aufwand vergleichen zu können. Priorisieren Sie die Features hinsichtlich des zentralen *Use Case* Ihrer Anwendung und notieren Sie, welche größeren Bereiche der Anwendung von diesen Funktionen betroffen sind.

| Feature | Beschreibung | Priorität | Geschätzter Aufwand | Betroffene Schichten |
|---------|--------------|-----------|--------------------|---------------------|
| **Kollaboratives Arbeiten** | Mehrere Nutzer können gleichzeitig auf das Whiteboard zugreifen und darauf arbeiten. | kritisch | 7 - 8 Tage | Backend, Server-Client-Kommunikation |
| **Whiteboard** | Der Nutzer beginnt die Arbeit auf einem leeren Whiteboard, für das ein Name festgelegt werden kann. Das Whiteboard kann während der Bearbeitung auch wieder geleert werden. | kritisch | 7 Tage | Frontend, Canvas Rendering, User Interface |
| **Textbox** | Auf dem Whiteboard können Textboxen eingefügt werden. Die Textboxen können erstellt, editiert (Größe, Text, Farbe) und gelöscht werden und mit verschiedenen Mustern hinterlegt werden (Post-Its, transparent) | kritisch | 4 Tage | Frontend, Canvas Rendering, User Interface |
| **Einladungs-Link** | Der Nutzer kann einen Einladungs-Link generieren und kopieren, um zur kollaborativen Arbeit einzuladen. | kritisch | 3 Tage | Backend, User Interface |
| **Benutzername** | Der Nutzer gibt sich einen Namen. Die anderen Nutzer sehen die Namen der Nutzer, die gerade am Whiteboard arbeiten | sehr hoch | 2 Tage | Backend, Frontend, Canvas Rendering, User Interface |
| **Export** | Das erstellte Whiteboard kann als PDF exportiert werden. | hoch | 5 Tage | Backend, User Interface |
| **Timer** | Der Nutzer hat die Möglichkeit, für einzelne Brainstorming-Aufgaben einen Timer zu stellen. Nach Ablauf des Timers wird ein Pop-up angezeigt. | mittel | 3 Tage | Frontend, Canvas Rendering, User Interface |
| **Bilder einfügen** | Der Nutzer hat die Möglichkeit, Bilder zu importieren. | nice-to-have | 3 Tage | Frontend, Backend, Canvas Rendering, User Interface |
| **Formen (Kreis, Pfeile)** | Der Nutzer kann zur Strukturierung der Gedanken Kreise und Pfeile einfügen. | nice-to-have | 4 Tage | Frontend, Canvas Rendering, User Interface |
| **Ansicht** | Der Nutzer kann die Ansicht individuell anpassen. Hierfür kann eine Zoom-Funktion sowie eine Pan-Funktion, mit der der Bildausschnitt angepasst werden kann, verwendet werden. | nice-to-have | 7 Tage | Frontend, Canvas Rendering, User Interface |
| **Freihand zeichnen** | Der Nutzer kann freihand auf das Whiteboard zeichnen. Die Zeichnungen können wieder gelöscht werden. | nice-to-have | 5 Tage | Frontend, Canvas Rendering, User Interface |




## Umsetzung

Beschreiben Sie kurz das geplante Vorgehen bei der Umsetzung der Features. Entwerfen Sie dazu ein oder mehrere *Vertical Slices* anhand derer Sie den zentralen *Use Case* der Anwendung implementieren werden. Geben Sie an, wann welche Funktionen (und in welchem Vollständigkeitsgrad) implementiert werden. Begründen Sie kurz die gewählte Reihenfolge.

1. Zunächst wird das Whiteboard, auf das die Nutzer später gemeinsam zugreifen können, implementiert.
2. Die grundlegenden Features zur Arbeit auf dem Whiteboard werden umgesetzt (Textboxen).
3. Der gemeinsame Zugriff auf das Whiteboard wird ermöglicht. Dies wird über die Implementierung des Einladungs-Links erreicht, den der Nutzer erzeugen und kopieren kann.
4. Die restlichen Features werden nach Gewichtung geordnet umgesetzt.

Diese Reihenfolge wurde gewählt, da zuerst die grundlegenden Funktionen (1.-3.) der Anwendung umgesetzt werden sollen. Anschließend wird die Anwendung um Features erweitert, die auf den Grundfunktionen aufbauen oder diese erweitern. 1.-3. sollten einzeln immer weitestgehend umgesetzt sein, bevor bei 4. parallel an der Umsetzung der Features gearbeitet werden kann.
