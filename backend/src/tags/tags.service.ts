import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Tags} from "../models/tags";

@Injectable()
export class TagsService {
  constructor(@InjectRepository(Tags) private readonly tagRepo: Repository<Tags>) {
  }

  async getTags(tagIds: string[]) {
    return this.tagRepo.findByIds(tagIds);
  }

}
