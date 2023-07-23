export interface Project {
    projectName: string;
    projectType: string;
    typeIcon: string;
    projectImages: string[] | ProjectImages;
    projectInformation: string;
    projectGitHubRepo: string;
    steps: string[];
    collapsed?: boolean; // Add the 'collapsed' property with an optional boolean type

}
  
 export interface ProjectImages {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}
  