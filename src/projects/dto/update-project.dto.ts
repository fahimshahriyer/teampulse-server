import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {
  readonly name?: string;
  readonly type?: string;
  readonly isActive?: boolean;
}
