import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Tag} from "../models/tag";

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tag) private readonly tagRepo: Repository<Tag>) {
  }

  async getTags(tagIds: number[]): Promise<Tag[]> {
    return this.tagRepo.findByIds(tagIds);
  }

}
