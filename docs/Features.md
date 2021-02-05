# Features für BrainBoard

[Notieren und beschreiben Sie hier alle wesentlichen Funktionen bzw. *Features* Ihrer Anwendung. Seien Sie möglichst ausführlich in der Dokumentation und beachten Sie für die Erläuterungen ("Beschreibung") die Perspektive Ihrer NutzerInnen. Schätzen Sie initial den wahrscheinlichen Aufwand - auch um diese Schätzung am Ende des Projekts mit dem tatsächlichen Aufwand vergleichen zu können. Priorisieren Sie die Features hinsichtlich des zentralen *Use Case* Ihrer Anwendung und notieren Sie, welche größeren Bereiche der Anwendung von diesen Funktionen betroffen sind]

| Feature | Beschreibung | Priorität | Geschätzter Aufwand | Betroffene Schichten |
|---------|--------------|-----------|--------------------|---------------------|
| **Kollaboratives Arbeiten** | Mehrere Nutzer können gleichzeitig auf das Whiteboard zugreifen und darauf arbeiten. | kritisch | 7 - 8 Tage | Backend, Server-Client-Kommunikation |
| **Whiteboard** | Der Nutzer beginnt die Arbeit auf einem leeren Whiteboard, für das ein Name festgelegt werden kann. Das Whiteboard kann während der Bearbeitung auch wieder geleert werden. | kritisch | 7 Tage | Frontend, Canvas Rendering, User Interface |
| **Post-Its** | Auf dem Whiteboard können Post-Its eingefügt werden. Die Post-Its können erstellt, editiert (Größe, Text, Farbe) und gelöscht werden. | kritisch | 4 Tage | Frontend, Canvas Rendering, User Interface |
| **Text** | Es kann an beliebigen Stellen auf dem Whiteboard Text eingefügt werden. Der Text kann erstellt, editiert (Größe, Text, Farbe) und gelöscht werden. | kritisch | 2 Tag | Frontend, Canvas Rendering, User Interface |
| **Einladungs-Link** | Der Nutzer kann einen Einladungs-Link generieren und kopieren, um zur kollaborativen Arbeit einzuladen. | kritisch | 3 Tage | Backend, User Interface |
| **Export** | Das erstellte Whiteboard kann als PDF exportiert werden. | kritisch | 5 Tage | Backend, User Interface |
| **Timer** | Der Nutzer hat die Möglichkeit, für einzelne Brainstorming-Aufgaben einen Timer zu stellen. Nach Ablauf des Timers wird eine Push-Nachricht angezeigt. | mittel | 3 Tage | Frontend, Canvas Rendering, User Interface |
| **Bilder einfügen** | Der Nutzer hat die Möglichkeit, Bilder zu importieren. | nice-to-have | 3 Tage | Frontend, Backend, Canvas Rendering, User Interface |
| **Formen (Kreis, Pfeile)** | Der Nutzer kann zur Strukturierung der Gedanken Kreise und Pfeile einfügen. | nice-to-have | 4 Tage | Frontend, Canvas Rendering, User Interface |
| **Ansicht** | Der Nutzer kann die Ansicht individuell anpassen. Hierfür kann eine Zoom-Funktion sowie eine Pan-Funktion, mit der der Bildausschnitt angepasst werden kann, verwendet werden. | nice-to-have | 7 Tage | Frontend, Canvas Rendering, User Interface |




## Umsetzung

[Beschreiben Sie kurz das geplante Vorgehen bei der Umsetzung der Features. Entwerfen Sie dazu ein oder mehrere *Vertical Slices* anhand derer Sie den zentralen *Use Case* der Anwendung implementieren werden. Geben Sie an, wann welche Funktionen (und in welchem Vollständigkeitsgrad) implementiert werden. Begründen Sie kurz die gewählte Reihenfolge. ]
