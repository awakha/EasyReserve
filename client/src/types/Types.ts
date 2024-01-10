export interface IRestaurant {
  id: number;
  name: string;
  description: string;
  address: string;
  images: string[];
  cuisineId: number;
  cityId: number;
  timetableId: number;
  avgScore?: string;
  countReviews?: string;
  createdAt?: Date;
  updatedAt?: Date;
  Cuisine?: ICuisine;
  City?: ICity;
  Timetable?: ITimetable;
  Dishes?: IDish[];
  Reviews?: IReview[];
}

export interface IUser {
  id?: number;
  username: string;
  email: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICuisine {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICity {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICategory {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICountry {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IDish {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  restId: number;
  createdAt?: Date;
  updatedAt?: Date;
  Category?: ICategory;
  Restaurant?: IRestaurant;
}

export interface IReservation {
  id: number;
  date: Date;
  guestsCount: number;
  startTime: Date;
  restId: number;
  userId: number;
  createdAt?: Date;
  updatedAt?: Date;
  Restaurant?: IRestaurant;
  User?: IUser;
}

export interface ITimetable {
  id: number;
  openTime: string;
  closeTime: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IReview {
  id: number;
  text: string;
  images: string[];
  score: number;
  userId: number;
  restId: number;
  createdAt?: Date;
  updatedAt?: Date;
  User?: IUser;
  Restaurant?: IRestaurant;
}

export interface IAvailableDateTimes {
  id: number;
  date: Date;
  startTime: string;
  endTime: string;
  guestsCount: number;
  restId: number;
  createdAt?: Date;
  updatedAt?: Date;
  Restaurant?: IRestaurant;
}
