export interface Project {
    projectName: string;
    projectStatus: string;
    projectType: string[];
    typeIcon: string;
    projectImages: string[];
    projectInformation: string;
    projectGitHubRepo: string;
    liveSite: string | undefined | null
    collapsed?: boolean;

}
  
 export interface ProjectImages {
    image1: string;
}
  