export interface FAQ {
    title: string;
    description: string;
}

export interface Benefit {
    title: string;
    description: string;
    icon: string;
}

export interface TeamDataType {
    image: string;
    name: string;
    role: string;
    about: string;
    social: SocialLinks;
}

export interface SocialLinks {
    website?: string;
    linkedin?: string;
    instagram?: string;
    email?: string;
}