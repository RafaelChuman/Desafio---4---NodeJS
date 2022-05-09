import { Request, Response } from "express";

import { ShowUserProfileUseCase, IRequest } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    
    const {id} = request.params;

    var idIRequest:IRequest;

    idIRequest.user_id = id;

    return response.json(this.showUserProfileUseCase.execute(idIRequest));
  } 
}

export { ShowUserProfileController };
