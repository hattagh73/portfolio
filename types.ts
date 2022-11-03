export interface iPropProjects {
    p_projects: iProjects[]
}

export interface iPropProjectDetails {
    p_pro_details: iProjects
}

export interface iProjects {
    p_id?: number,
    p_name: string,
    p_category: string,
    p_about?: string[],
    p_stack?: string[]
}

