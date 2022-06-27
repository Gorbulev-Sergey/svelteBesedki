<script>
	import { Person } from './Person';

	export let user = new Person();
</script>

<div class="card h-100 border-0 bg-light">
	<div class="card-body">
		<h4>{user.name}</h4>
		<div>{user.age} лет</div>
		<div>{user.email}</div>
		<div>{user.description}</div>
	</div>
	<img class="card-img-bottom" src={user.photo} alt="" />
</div>
