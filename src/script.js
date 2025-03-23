
const header = document.getElementById('projects-header');

const projects = [
    {
      title: "Saleblazers",
      role: "Programmer",
      description: "Open world, shopkeeping, multiplayer experience where players must make as much money as they can and explore the world in order to get off the island. Build shops, survive the night, steal from locals, or just chill with friends in the shop!",
      video: "https://www.youtube.com/embed/VkKcCM7df00?autoplay=0&mute=0&controls=1&loop=0",
      link: "https://store.steampowered.com/app/1419850/Saleblazers/",
      buttonText: "Steam Link"
    },

    {
      title: "Smithworks",
      role: "Director, Lead Engineer, Designer",
      description: "Cooperative, fun, and unique multiplayer experience where everyone plays as fledging blacksmiths trying to meet the crazy demands of the customers.  Players take on contracts form the Smithworks guild taking place in many different areas around the world. Players must learn to communicate and cooperate effectively in order to complete these contracts",
      video: "https://www.youtube.com/embed/E3nhMmUAZYE?autoplay=0&mute=0&controls=1&loop=0",
      link: "https://store.steampowered.com/app/1568540/Smithworks/",
      buttonText: "Steam Link"
    }
  ];
  
  const container = document.getElementById('projects-container');
  const template = document.getElementById('project-template');
  
  projects.forEach(project => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.title').textContent = project.title;
    clone.querySelector('.role').textContent = project.role;
    clone.querySelector('.description').textContent = project.description;
    clone.querySelector('.video').src = project.video;
    clone.querySelector('.button-link').href = project.link;
    clone.querySelector('.button-text').textContent = project.buttonText;
    container.appendChild(clone);
  });
