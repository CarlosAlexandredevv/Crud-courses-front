import { Course } from './course';

export type GetCoursesResponse = {
  courses: Course[];
  total: number;
  active: number;
  inactive: number;
};
