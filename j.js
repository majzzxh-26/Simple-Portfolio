document.addEventListener("DOMContentLoaded",function(){
    const projects = document.querySelectorAll ('.project');
    projects.forEach((project,index) =>{
        project.style.Animationdelay ='${ index * 0.2}s';
        project.classList.add('fade-in');
    });

});