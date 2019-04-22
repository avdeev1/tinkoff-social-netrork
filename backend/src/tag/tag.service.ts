import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Tag} from "../models/tag";

@Injectable()
export class TagService {
  constructor(@InjectRepository(Tag) private readonly tagRepo: Repository<Tag>) {
  }

  async getTagByIds(tagIds: number[]): Promise<Tag[]> {
    return await this.tagRepo.findByIds(tagIds);
  }

  async getTags(): Promise<Tag[]> {
    return await this.tagRepo.find();
  }

}
