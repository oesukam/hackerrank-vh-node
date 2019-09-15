## Node.js Express: Github Dataset API

In this challenge, you are part of a team building a git event tracking platform. One requirement is for a REST API service to provide events information using the Nodejs Express framework. You will need to add functionality to add and delete information as well as to perform some queries. You'll be dealing with typical information for git event data like repository, actor, event type, etc. The team has come up with a set of requirements including filtering and ordering requirements, response codes and error messages for the queries you must implement.


The definitions and a detailed requirements list follow. You will be graded on whether your application performs data retrieval and manipulation based on given use cases exactly as described in the requirements.

 

<p>&nbsp;</p>

<p>Each event data is a JSON entry with the following keys:</p>

<ul>
	<li>
<code>id</code>: This is the event unique ID.</li>
	<li>
<code>type</code>: This is the event type.</li>
	<li>
<code>actor</code>: The actor responsible for the event. The actor itself is a JSON entry consisting of following fields:
	<ul>
		<li>
<code>id</code>: This is the actor unique ID.</li>
		<li>
<code>login</code>: This is the actor unique login ID.</li>
		<li>
<code>avatar_url</code>: This is the actor avatar URL.</li>
	</ul>
	</li>
	<li>
<code>repo</code>: The repository to which this event is associated with. The repo itself is a JSON entry consisting of following fields:
	<ul>
		<li>
<code>id</code>: This is the repo unique ID.</li>
		<li>
<code>name</code>: This is the repo name.</li>
		<li>
<code>url</code>: This is the repo URL.</li>
	</ul>
	</li>
	<li>
<code>created_at</code>: This is the timestamp for the event creation given in the format <code>yyyy-MM-dd HH:mm:ss</code>. The timezone is <code>UTC +0</code>.</li>
</ul>

<p>&nbsp;</p>
 

Sample JSON git event object
 
<p>&nbsp;</p>

<p>The <em>REST</em> service should implement the following functionalities:</p>

<ol>
	<li>
<em>Erasing all the events</em>: The service should be able to erase all the events by the <em>DELETE</em> request at <code>/erase</code>. The <em>HTTP</em> response code should be <em>200</em>.</li>
	<li>
<em>Adding new events</em>: The service should be able to add a new event by the <em>POST</em> request at <code>/events</code>. The event <em>JSON</em> is sent in the request body. If an event with the same id already exists then the <em>HTTP</em> response code should be <em>400</em>, otherwise, the response code should be <em>201</em>.</li>
	<li>
<em>Returning all the events</em>: The service should be able to return the JSON array of all the events by the <em>GET</em> request at <code>/events</code>. The <em>HTTP</em> response code should be <em>200</em>. The JSON array should be sorted in ascending order by event ID.</li>
	<li>
<em>Returning the event records filtered by the actor ID</em>: The service should be able to return the <em>JSON</em> array of all the events which are performed by the actor ID by the <em>GET</em> request at <code>/events/actors/{actorID}</code>. If the requested actor does not exist then <em>HTTP</em> response code should be <em>404</em>, otherwise, the response code should be <em>200</em>. The JSON array should be sorted in ascending order by event ID.</li>
	<li>
<em>Updating the avatar URL of the actor</em>: The service should be able to update the avatar URL of the actor by the <em>PUT</em> request at <code>/actors</code>. The actor <em>JSON</em> is sent in the request body. If the actor with the id does not exist then the response code should be <em>404</em>, or if there are other fields being updated for the actor then the <em>HTTP</em> response code should be <em>400</em>, otherwise, the response code should be <em>200</em>.</li>
	<li>
<em>Returning the actor records ordered by the total number of events</em>: The service should be able to return the <em>JSON</em> array of all the actors sorted by the total number of associated events with each actor in descending order by the <em>GET</em> request at <code>/actors</code>. If there are more than one actors with the same number of events, then order them by the timestamp of the latest event in the descending order. If more than one actors have the same timestamp for the latest event, then order them by the alphabetical order of login. The <em>HTTP</em> response code should be <em>200</em>.</li>
	<li>
<em>Returning the actor records ordered by the maximum streak</em>: The service should be able to return the <em>JSON</em> array of all the actors sorted by the maximum streak (i.e., the total number of consecutive days actor has pushed an event to the system) in descending order by the <em>GET</em> request at <code>/actors/streak</code>. If there are more than one actors with the same maximum streak, then order them by the timestamp of the latest event in the descending order. If more than one actors have the same timestamp for the latest event, then order them by the alphabetical order of login. The <em>HTTP</em> response code should be <em>200</em>.</li>
</ol>

<p>&nbsp;</p>

<p>You should complete the given incomplete project so that it passes all the test cases when running the provided unit tests. The project by default supports the use of SQLite3 database but you also use NeDB. These two are the only accepted database</p>