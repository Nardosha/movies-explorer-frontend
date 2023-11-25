import { SearchForm } from "./SearchForm/SearchForm";
import { Switcher } from "./Switcher/Switcher";
import { Separator } from "../Separator/Separator";
import { MovieCardList } from "./MoviesCardList/MovieCardList";
import { MoreButton } from "../MoreButton/MoreButton";
import { useEffect, useState } from "react";

export const Movies = ({ movies }) => {
    console.log('MOVIES')
  const channel = new BroadcastChannel("app-data");

  useEffect(() => {
    console.log("MOVIES: use effect");
  });

  useEffect(() => {
    console.log("MOVIES: use effect-channel", channel);

    channel.onmessage = ((event) => {
      console.log(1, "message", event.data);
    });
  }, [channel]);

  return (
    <section className="movies">
      <SearchForm className="movies__search-form" />
      <Switcher className="movies__switcher" title="Короткометражки" />
      <Separator className="movies__separator" />

      <MovieCardList className="movies__list" movies={movies} />

      <MoreButton className="movies__more-button" />
    </section>
  );
};
