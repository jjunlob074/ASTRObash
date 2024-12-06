// src/utils/fileSystem.js
const fileSystem = {
    ' ~': ['Documents', 'Downloads', 'Pictures', 'Music', 'Desktop', 'Projects'],
    ' ~/Documents': ['Resume.pdf', 'Notes.txt', 'Budget.xlsx', 'Research.pptx'],
    ' ~/Downloads': ['File1.zip', 'File2.zip', 'Installer.exe'],
    ' ~/Pictures': ['Vacation.jpg', 'Family.png', 'ProfilePic.png'],
    ' ~/Pictures/Vacation.jpg': 'https://www.w3schools.com/w3images/fjords.jpg',
    ' ~/Pictures/Family.png': 'https://www.w3schools.com/w3images/family.jpg',
    ' ~/Pictures/ProfilePic.png': 'https://www.w3schools.com/w3images/avatar2.png',
    ' ~/Music': ['song1.mp3', 'song2.mp3', 'album1.mp3', 'album2.mp3'],
    ' ~/Music/song1.mp3': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    ' ~/Music/song2.mp3': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    ' ~/Music/album1.mp3': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    ' ~/Music/album2.mp3': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    ' ~/Desktop': ['WorkStuff', 'Personal', 'Shortcuts'],
    ' ~/Projects': ['Project1', 'Project2', 'Project3'],
    ' ~/Documents/Notes.txt': 'This is a sample text file with notes.',
    ' ~/Documents/Budget.xlsx': 'This file contains the yearly budget details.',
    ' ~/Documents/Research.pptx': 'Presentation slides for the research project.',
    ' ~/Desktop/WorkStuff': ['MeetingNotes.txt', 'Presentation.pptx'],
    ' ~/Desktop/Personal': ['ShoppingList.txt', 'BirthdayGiftIdeas.txt'],
    ' ~/Desktop/Shortcuts': ['Resume.pdf', 'Project1'],
    ' ~/Projects/Project1': ['index.html', 'app.js', 'style.css'],
    ' ~/Projects/Project2': ['main.py', 'requirements.txt'],
    ' ~/Projects/Project3': ['README.md', 'server.js'],
    ' ~/Projects/Project1/index.html': '<!DOCTYPE html><html><body><h1>Project 1</h1></body></html>',
    ' ~/Projects/Project1/app.js': 'console.log("Hello from Project 1")',
    ' ~/Projects/Project2/main.py': 'print("Hello from Project 2")',
    ' ~/Projects/Project3/README.md': 'This is a readme for Project 3',
    ' ~/Projects/Project3/server.js': 'console.log("Server is running for Project 3")',
  };
  
  export default fileSystem;
  