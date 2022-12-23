<script>
	import { toggle_class } from 'svelte/internal';
</script>

<nav
	class="navbar navbar-expand-lg navbar-light bg-light position-fixed top-0 w-100"
	style="z-index: 10000;"
>
	<div class="container">
		<a class="btn btn-dark text-light me-5" href="/"><b>ПРОИЗВОДСТВО БЕСЕДОК</b></a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarNav"
			aria-controls="navbarNav"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse justify-content-between" id="navbarNav">
			<div class="navbar-nav">
				<a class="btn bg-light me-2 text-start mt-1 mt-md-0" href="/">Начало</a>
				<a class="btn bg-light me-2 text-start mt-1 mt-md-0" href="/#scroll1">Металл</a>
				<a class="btn bg-light me-2 text-start mt-1 mt-md-0" href="/#scroll2">Дерево</a>
				<a class="btn bg-light me-2 text-start mt-1 mt-md-0" href="/#scroll3">Труд</a>
				<a class="btn bg-light me-2 text-start mt-1 mt-md-0" href="/#scroll4">Результат</a>
			</div>
			<div class="navbar-nav bg-dark rounded">
				<a class="btn btn-dark me-2 text-start mt-1 mt-md-0" href="/second/people">Люди</a>
				<a class="btn btn-dark me-2 text-start mt-1 mt-md-0" href="/second/price">Цены</a>
				<a class="btn btn-dark text-start mt-1 mt-md-0" href="/second/contacts">Контакты</a>
			</div>
		</div>
	</div>
</nav>

<div class="container mb-4">
	<slot />
</div>
