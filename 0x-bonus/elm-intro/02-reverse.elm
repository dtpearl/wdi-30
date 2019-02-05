-- imports
import Browser
import Html exposing (Html, Attribute, div, input, text)
import Html.Events exposing (onInput)

main =
  Browser.sandbox { init = init, update = update, view = view  }

-- model
type alias Model = { content: String }
init : Model
init = { content = "" }

-- update
type Msg = Change String
update : Msg -> Model -> Model
update msg model =
  case msg of
    Change newContent ->
      { model | content = newContent }

-- view
view : Model -> Html Msg
view model =
  div []
    [ input [ onInput Change ] []
    , div [] [ text (String.reverse model.content)]
  ]
