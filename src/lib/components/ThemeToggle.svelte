<script lang="ts">
	import { theme } from '../../stores/ui-store';
</script>

<button on:click={theme.toggleMode} aria-label="Toggle Theme">
	{$theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
</button>
