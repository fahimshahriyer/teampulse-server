export class CreateProjectDto {
  readonly name: string;
  readonly type: string;
  readonly isActive?: boolean; // isActive is optional for creation
}
