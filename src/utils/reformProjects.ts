import { ProjectType } from './data';

export function ReformProjectArray(projects: ProjectType[]): ProjectType[][] {
  // Create two empty arrays to store the featured project and other projects.
  const featuredProject = [];
  const otherProjects = [];

  // Iterate over the projects array and add each project to the appropriate array.
  for (const project of projects) {
    if (project.type.split(" ")[0].toLowerCase() === 'featured') {
      featuredProject.push(project);
    } else {
      otherProjects.push(project);
    }
  }

  // If there is a featured project, create a new array to store the reformed project list.
  if (featuredProject.length > 0) {
    const reformedProjects = [];

    // Iterate over the featured project array and create a new subarray for each featured project.
    for (const project of featuredProject) {
      const subArray = [project];

      // Add the next two other projects to the subarray, if they exist.
      otherProjects[0] ? subArray.push(otherProjects.shift()!) : undefined;
      otherProjects[0] ? subArray.push(otherProjects.shift()!) : undefined;

      // Add the subarray to the reformed project list.
      reformedProjects.push(subArray);
    }

    // If there are any remaining other projects, add them to a new subarray and add that subarray to the reformed project list.
    if (otherProjects.length > 0) {
      const otherSubArray = otherProjects;
      reformedProjects.push(otherSubArray);
    }

    // Return the reformed project list.
    return reformedProjects;
  } else {
    // If there is no featured project, return the other projects array.
    return [otherProjects];
  }
}
