class Competition {
	name: string;
	best_score: number;
	year: number;
};

export class Strongman {
	id: number;
	fName: string;
	lName: string;
	age: number;
	weight: number;
	liftRecord: number;
	competitions: Competition[];
};