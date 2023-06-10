/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import Constants from "../utilities/Constants"

const PostCreateForm = () => {

	const initialFormData = Object.freeze({
		title: "post x",
		content: "post content"
	});

	const [formData, setFormData] = useState(initialFormData);


	const handleChange= (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const postToCreate = {
			postId:0,
			title: formData.title,
			content: formData.content
		};

		const url = Constants.API_URL_CREATE_POST;

		
		fetch(url, {
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(postToCreate),
		})
		.then(res => res.json())
		.then(postFromServer  => {
			console.log(postFromServer);
		})
		.catch((err:any) => console.log(err));
	}

	return (
		<div>
			<form action="">
				<h1>create new post</h1>

				<div>
					<label >post title</label>
					<input name="title" value={formData.title} type="text" onChange={handleChange} />
				</div>

				<div>
					<label >post title</label>
					<input name="content" value={formData.content} type="text" onChange={handleChange}  />
				</div>

				<button onClick={handleSubmit}>create  post</button>
			</form>
		</div>
	)
}

export default PostCreateForm