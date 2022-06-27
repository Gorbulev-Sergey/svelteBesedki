<script>
	import { onMount } from 'svelte';
	import { Person } from '../../components/Person';
	import Card from '../../components/Card.svelte';

	let persons = new Array(
		new Person(
			'Иванов Пётр',
			'Молодой человек',
			25,
			'https://i.pinimg.com/originals/4b/3c/13/4b3c13bd4078439d9d2d08847d30a9cb.jpg',
			''
		),
		new Person(
			'Сидоренко Сидор',
			'Как вы думаете',
			40,
			'https://i.pinimg.com/736x/71/ad/c5/71adc58314a9a24e93d7fc97b1a98637.jpg',
			''
		),
		new Person(
			'Глаголин Пётр',
			'О чём он думает',
			30,
			'https://i.pinimg.com/736x/e5/a1/bc/e5a1bc9677b442494b2f13c6eea998e2.jpg',
			''
		),
		new Person(
			'Любовина Валентина',
			'О чём он думает',
			14,
			'https://i.pinimg.com/originals/bb/cd/30/bbcd30c2a7f40296082988bb0f131166.jpg',
			''
		)
	);

	const endpoint = 'https://jsonplaceholder.typicode.com/users';
	const addons = `{mode: 'no-cors',	method: 'post',	headers: {	'Content-Type': 'application/json',	'Access-Control-Allow-Origin': '*'	}	}`;
	let posts = [];

	onMount(async function () {
		const response = await fetch(endpoint);
		const data = await response.json();
		posts = data;
		console.log(data);
	});
</script>

<h1 class="mb-3">Наши люди</h1>
<div class="row row-cols-1 row-cols-md-4 g-4">
	{#each persons as item}
		<div class="col">
			<Card user={item} />
		</div>
	{/each}

	{#each posts as item}
		<div class="col">
			<div class="col">
				<Card user={item} />
			</div>
		</div>
	{/each}
</div>
