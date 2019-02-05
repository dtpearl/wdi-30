-- imports
import Browser
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)

main = Browser.sandbox { init = init, update = update, view = view }

-- model
type alias Model = { name : String, password : String, passwordAgain : String }
init : Model
-- init = { name = "", password = "", passwordAgain = "" }
init = Model "" "" ""

-- update
type Msg = Name String | Password String | PasswordAgain String
update : Msg -> Model -> Model
update msg model =
  case msg of
    Name newName ->
      { model | name = newName }
    Password newPassword ->
      { model | password = newPassword }
    PasswordAgain newPassword ->
      { model | passwordAgain = newPassword }

-- view
view : Model -> Html Msg
view model =
  div []
    [ viewInput "text" "Name" model.name Name
    , viewInput "password" "Password" model.password Password
    , viewInput "password" "Re-enter password" model.passwordAgain PasswordAgain
    , viewValidation model
    ]

viewInput : String -> String -> String -> (String -> msg) -> Html msg
viewInput t p v toMsg =
  input [ type_ t, placeholder p, value v, onInput toMsg ] []

viewValidation : Model -> Html msg
viewValidation model =
  if model.password == model.passwordAgain then
    div [ style "color" "green" ] [ text "OK" ]
  else
    div [ style "color" "red" ] [ text "Password do not match" ]
