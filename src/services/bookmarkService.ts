import { bookmarkModel, bookmarkModelType } from '../models';
import { BookmarkInterface } from '../models/schemas/bookmark';

// 비즈니스 로직은 여기서!!
class BookmarkService {
  private Bookmark: bookmarkModelType;

  // 의존성 주입
  constructor(bookmarkModel: bookmarkModelType) {
    this.Bookmark = bookmarkModel;
  }
  //북마크 가져오기
  async findBookmark(userEmail: string) {
    return await this.Bookmark.find({ email: userEmail });
  }
  //북마크 생성
  async createBookmark(bookmarkInfo: BookmarkInterface) {
    return await this.Bookmark.create(bookmarkInfo);
  }
  //북마크 하나 삭제
  async deleteBookmark(caseId: string) {
      return await this.Bookmark.findOneAndDelete({_id: caseId});
  }
}

const bookmarkService = new BookmarkService(bookmarkModel);

export { bookmarkService };
