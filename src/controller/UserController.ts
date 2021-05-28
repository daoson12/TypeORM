import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";



//Repository to get all registered users
export const getUsers = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users = await getRepository(User).find();
  return res.json(users);
};
//Repository to get registered user by 1
export const getUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const results = await getRepository(User).findOne(req.params.id);
  if(results){
    return res.json(results);
  }

  return res.json({msg: 'No user found with this '});
};

//Repository to create user
export const createUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await getRepository(User).create(req.body);
  const results = await getRepository(User).save(newUser);
  return res.json(results);
};

//Repository to get and update registered user by 1
export const updateUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await getRepository(User).findOne(req.params.id);
  if (user) {
    getRepository(User).merge(user, req.body);
    const results = await getRepository(User).save(user);
    return res.json(results);
  }

  return res.json({msg: 'Not user found'});
};
//Repository to delete registered user by 1
export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
  const results = await getRepository(User).delete(req.params.id);
  return res.json(results);
}