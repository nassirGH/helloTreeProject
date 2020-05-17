<?php

namespace App\Http\Controllers;

use App\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class MenuController extends Controller
{
    public function open() 
            {
                $data = "This data is open and can be accessed without the client being authenticated";
                return response()->json(compact('data'),200);

            }

            public function closed() 
            {
                $data = "Only authorized users can see this";
                return response()->json(compact('data'),200);
            }

            public function AddToMenu(Request $request)
            {
                    $validator = Validator::make($request->all(), [
                    'title' => 'required|string|max:255',
                    'src' => 'required|string|max:255',
                    'description' => 'required|string|min:6',
                ]);
    
                if($validator->fails()){
                        return response()->json($validator->errors()->toJson(), 400);
                }
    
                $menu = Menu::create([
                    'title' => $request->get('title'),
                    'src' => $request->get('src'),
                    'description' => $request->get('description'),
                ]);
    
                $token = JWTAuth::fromMenu($menu);
    
                return response()->json(compact('menu','token'),201);
            }
    

            public function getAuthenticatedUserForMenu()
            {
                    try {

                            if (! $menu = JWTAuth::parseToken()->authenticate()) {
                                    return response()->json(['menu_not_found'], 404);
                            }

                    } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

                            return response()->json(['token_expired'], $e->getStatusCode());

                    } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

                            return response()->json(['token_invalid'], $e->getStatusCode());

                    } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

                            return response()->json(['token_absent'], $e->getStatusCode());

                    }

                    return response()->json(compact('menu'));
            }
}
