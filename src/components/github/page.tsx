"use client";
import { useEffect, useState } from "react";
import Search from "@/components/Search";
import SortRepos from "@/components/SortRepos";
import ProfileInfo from "@/components/ProfileInfo";
import Repos from "@/components/Repos";
import Spinner from "@/components/Spinner";

import toast from "react-hot-toast";
const Home = () => {
const [userProfile, setUserProfile] = useState(null);
const [repos, setRepos] = useState([]);
const [loading, setLoading] = useState(false);
const [sortType, setSortType] = useState("recent");

const getAllRepos = async () => {
  const response = await fetch("/api/github/repos", {
    method: "GET",
  });
  return response.json();
};

const getAllUserProfile = async () => {
  const response = await fetch("/api/github/user", {
    method: "GET",
  });
  return response.json();
};

useEffect(() => {
  const fetchData = async () => {
    const repos = await getAllRepos();
    const userProfile = await getAllUserProfile();
    setRepos(repos);
    setUserProfile(userProfile);
  };
  fetchData();
}, []);

	const onSearch = async (e, username) => {
		e.preventDefault();

		setLoading(true);
		setRepos([]);
		setUserProfile(null);
		setLoading(false);
		setSortType("recent");
	};

	const onSort = (sortType) => {
		if (sortType === "recent") {
			repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
		} else if (sortType === "stars") {
			repos.sort((a, b) => b.stargazers_count - a.stargazers_count); //descending, most stars first
		} else if (sortType === "forks") {
			repos.sort((a, b) => b.forks_count - a.forks_count); //descending, most forks first
		}
		setSortType(sortType);
		setRepos([...repos]);
	};

  return (
      <div className='m-4 ml-4 md:ml-24'>
			<Search onSearch={onSearch} />
			{repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />}
			<div className='flex flex-col lg:flex-row justify-center items-start gap-4'>
				{userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
				 {!loading && <Repos repos={repos} />}
				{loading && <Spinner />} 
			</div>
		</div>
  );
};

export default Home;
