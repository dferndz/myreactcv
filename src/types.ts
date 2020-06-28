export interface IDictionary {
  [index: string]: any;
}

export type School = {
  name: string;
  degree: string;
  major: string;
  details: string;
};

export type Job = {
  employer: string;
  position: string;
  department?: string;
  details?: string;
};

export type Project = {
  name: string;
  details?: string;
  url?: string;
  img?: string;
};

export type CV = {
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
    img: string;
  };
  skills: string[];
  schools: School[];
  jobs: Job[];
  projects: Project[];
  social: IDictionary;
  pages: {
    home: {
      title: string;
      body: string;
    };
    about: {
      title: string;
      body: string;
    };
  };
};

export const EmptyCv = {
  profile: {
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    img: "",
  },
  schools: [],
  jobs: [],
  skills: [],
  social: {},
  projects: [],
  pages: {
    home: {
      title: "",
      body: "",
    },
    about: {
      title: "",
      body: "",
    },
  },
};

export type CommonProps = {
  cv: CV;
  updateCv: (cv: CV) => void;
  updating: boolean;
};
