import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import Card from "../components/Card";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  // Define your projects data
  const projects = [
    {
      title: "StackOverflow clone",
      description: "The StackOverflow Clone project is a full-stack web application inspired by the popular Q&A platform, Stack Overflow. It aims to provide a similar user experience for developers to ask questions, share knowledge, and collaborate within a community-driven environment.",
      imageUrl: "stack.png",
      link: "https://clinquant-sunshine-ff1bf7.netlify.app",
      githubLink: "https://github.com/kavichselvan/webcode_2", // Add GitHub link

    },
    {
      title: "Bulk Email Tool",
      description: "Effortlessly send mass emails to your audience with the Bulk Email Tool. Streamline your email marketing efforts and engage with your subscribers effectively. Customize templates, schedule campaigns, and track performance easily. Simplify your email marketing strategy and reach more customers with ease.",
      imageUrl: "Bulk.Png",
      link: "https://venerable-halva-0293bd.netlify.app",
      githubLink: "https://github.com/kavichselvan/capstone", // Add GitHub link

    },

    {
      title: "Book store",
      description: "Discover your next favorite read at the Book Store. Browse a wide selection of genres, from fiction to non-fiction, and find the perfect book to dive into. Explore bestsellers, new releases, and hidden gems, all in one convenient place. Fuel your love for reading and embark on literary adventures with the Book Store.",
      imageUrl: "Book.png",
      link: "https://darling-sprite-849979.netlify.app/",
      githubLink: "https://github.com/kavichselvan/Book_store/tree/master/Book_store", // Add GitHub link

    },

    {
      title: "Notes making app",
      description: "Stay organized and productive with the Notes Making App. Capture ideas, jot down thoughts, and organize your tasks effortlessly. Create, edit, and manage your notes seamlessly across devices. Whether it's meeting notes, project ideas, or to-do lists, the Notes Making App helps you stay on top of your tasks and unleash your creativity.",
      imageUrl: "Note.png",
      link: "https://darling-trifle-610b1d.netlify.app/",
      githubLink: "https://github.com/kavichselvan/notes_app", // Add GitHub link

    },
    
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projects.map((project) => (
            <Card
              key={project.title} // Use a unique identifier as the key
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              githubLink={project.githubLink} // Pass the GitHub link

            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
