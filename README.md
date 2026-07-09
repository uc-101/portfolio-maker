Portfolio Maker

Portfolio Maker is a client-side web application that enables users to create a professional portfolio through an intuitive form-based interface. As users enter information, the application renders a live portfolio preview in real time and allows them to export it as a standalone HTML file or print it as a PDF.
The project was built to demonstrate modern frontend development concepts such as state management, dynamic DOM rendering, reusable UI generation, browser storage, and responsive interface design using only HTML, CSS, and JavaScript.

Features

 Multiple Portfolio Templates
Users can instantly switch between Modern, Minimal, and Bold templates without losing their data.
The selected template is stored in the application's state and rendered dynamically.
const state = {
  template: "modern",
  ...
}
The preview updates automatically by changing the template class.
p.className = "t-" + state.template;

Live Portfolio Preview

Every input field is connected to the application state using a reusable field binding function.
bindField(id, key)
Whenever a user edits a field:
state[key] = el.value;
render();
the portfolio preview is immediately regenerated without requiring a page refresh.

Profile Picture Upload

Users can upload a profile image directly from their device.
The application uses the FileReader API to convert the uploaded image into a Base64 string so it can be previewed instantly and saved locally.
const reader = new FileReader();
reader.readAsDataURL(file);

Dynamic Skills Management

Skills are managed as an array inside the application's central state.
state.skills.push(skill);
Each skill is rendered as an interactive chip that can also be removed individually.

Reusable Dynamic Sections

Instead of writing separate logic for Education, Projects, and Certificates, the project uses a reusable factory function:
makeRepeater(key, fields, listId)
This generates complete CRUD functionality for multiple sections while minimizing duplicated code.
The same component powers:
Education
Projects
Certificates

Automatic Local Storage

User data is automatically preserved in the browser.
localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
Previously saved portfolios are restored automatically when the application loads.
loadData();

Export Portfolio

The application supports two export methods:
Print directly to PDF using the browser print dialog
window.print();
Download a fully self-contained HTML portfolio
new Blob([html], {
type: "text/html"
});
The exported file includes all styling so it can be opened independently.

Responsive Design

The interface uses CSS Grid and media queries to adapt between desktop and mobile layouts.
.app {
    display: grid;
    grid-template-columns: 420px 1fr;
}

Tech Stack

HTML5
CSS3
JavaScript (ES6)
Local Storage API
FileReader API
CSS Grid
Flexbox
No external frameworks or libraries were used.
Responsive CSS Grid & Flexbox

<img width="1920" height="1080" alt="Screenshot (389)" src="https://github.com/user-attachments/assets/28418c3a-4bb0-4532-af3e-c03277c55db0" />
<img width="1920" height="1080" alt="Screenshot (388)" src="https://github.com/user-attachments/assets/287e03ec-d996-4d6d-99f4-7c4a8709665d" />
<img width="1920" height="1080" alt="Screenshot (387)" src="https://github.com/user-attachments/assets/e31e0237-856e-4a9f-8605-0426bae6dcd4" />

Final Outcome

<img width="1920" height="1080" alt="Screenshot (390)" src="https://github.com/user-attachments/assets/8853f6db-744d-485f-9e3a-daee94a26c5b" />
