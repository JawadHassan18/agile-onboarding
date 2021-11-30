export interface Linkedin {
	username: string;
	url: string;
	is_premium: boolean;
	num_connections: string;
}

export interface Twitter {
	username: string;
	url: string;
}

export interface Social_account {
	linkedin: Linkedin;
	twitter: Twitter;
}

export interface Website {
	url: string;
	category: string;
}

export interface Started_on {
	year: number;
	month: number;
}

export interface Ended_on {
	year: number;
	month: number;
}

export interface Work_experience {
	company_id: string;
	company_name: string;
	title: string;
	description: string;
	location: string;
	started_on: Started_on;
	ended_on: Ended_on;
}

export interface Started_on {
	year: number;
	month: number;
}

export interface Ended_on {
	year: number;
	month: number;
}

export interface Education {
	school_name: string;
	degree: string;
	started_on: Started_on;
	ended_on: Ended_on;
	fields_of_study: string[];
}

export interface Language {
	name: string;
	proficiency: string;
}

export interface Courses_taken {
	name: string;
}

export interface Issued_on {
	year: number;
	month: number;
}

export interface Award {
	title: string;
	description: string;
	issuer: string;
	issued_on: Issued_on;
}

export interface Started_on {
	year: number;
	month: number;
}

export interface Ended_on {
	year: number;
	month: number;
}

export interface Membership {
	name: string;
	position: string;
	description: string;
	started_on: Started_on;
	ended_on: Ended_on;
}

export interface Started_on {
	year: number;
	month: number;
}

export interface Ended_on {
	year: number;
	month: number;
}

export interface Certification {
	name: string;
	authority: string;
	company_id: string;
	license_number: string;
	url: string;
	started_on: Started_on;
	ended_on: Ended_on;
}

export interface Started_on {
	year: number;
	month: number;
}

export interface Ended_on {
	year: number;
	month: number;
}

export interface Volunteering_experience {
	role: string;
	cause: string;
	description: string;
	company_name: string;
	company_id: string;
	url: string;
	started_on: Started_on;
	ended_on: Ended_on;
}

export interface Started_on {
	year: number;
	month: number;
}

export interface Ended_on {
	year: number;
	month: number;
}

export interface Project {
	title: string;
	description: string;
	url: string;
	started_on: Started_on;
	ended_on: Ended_on;
}

export interface Published_on {
	day: number;
	year: number;
	month: number;
}

export interface Publication {
	name: string;
	publisher: string;
	description: string;
	url: string;
	published_on: Published_on;
}

export interface Issued_on {
	day: number;
	year: number;
	month: number;
}

export interface Patent {
	title: string;
	pending: boolean;
	issued_in: string;
	description: string;
	patent_number: string;
	url: string;
	issued_on: Issued_on;
}

export interface Profile {
	profile_id: string;
	collected_on: string;
	first_name: string;
	last_name: string;
	headline: string;
	summary: string;
	industry: string;
	location: string;
	emails: string[];
	social_accounts: Social_account;
	websites: Website[];
	work_experiences: Work_experience[];
	education: Education[];
	skills: string[];
	languages: Language[];
	courses_taken: Courses_taken[];
	awards: Award[];
	memberships: Membership[];
	certifications: Certification[];
	volunteering_experiences: Volunteering_experience[];
	projects: Project[];
	publications: Publication[];
	patents: Patent[];
}