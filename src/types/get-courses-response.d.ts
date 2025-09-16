import { Course } from './course';

export type GetCoursesResponse = {
  courses: Course[];
  active: number;
  inactive: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  totalItems: number;
};
