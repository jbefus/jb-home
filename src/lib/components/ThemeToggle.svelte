<script lang="ts">
	import { theme } from '../../stores/ui-store';
</script>

<button onclick={theme.toggleMode} aria-label="Toggle Theme">
	{$theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
</button>
