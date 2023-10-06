export interface Project {
    projectName: string;
    projectStatus: string;
    projectType: string[];
    typeIcon: string;
    projectImages: string[];
    projectInformation: string;
    projectGitHubRepo: string;
    // steps: string[];
    collapsed?: boolean;

}
  
 export interface ProjectImages {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
}
  