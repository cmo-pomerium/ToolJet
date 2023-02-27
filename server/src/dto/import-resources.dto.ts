import { IsUUID, IsOptional, ValidateNested, IsString, IsDefined } from 'class-validator';

export class ImportResourcesDto {
  @IsUUID()
  organization_id: string

  @IsString()
  tooljet_version: string

  @IsOptional()
  app: ImportAppDto[];

  @IsOptional()
  tooljet_database: ImportTooljetDatabaseDto[];
}

export class ImportAppDto {
  @IsDefined()
  definition: any;
}

export class ImportTooljetDatabaseDto {
  @IsString()
  table_name: string;

  @IsDefined()
  schema: any

  // @IsOptional()
  // data: boolean;
}
