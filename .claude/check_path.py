import sys, json, re

d = json.load(sys.stdin)
allowed = '/Users/mercedesreibe/Desktop/Claude AI Projects/harvey-specter'
inp = d.get('tool_input', {})
tool = d.get('tool_name', '')

def denied(reason):
    print(json.dumps({
        'hookSpecificOutput': {
            'hookEventName': 'PreToolUse',
            'permissionDecision': 'deny',
            'permissionDecisionReason': reason
        }
    }))
    sys.exit(0)

if tool in ('Read', 'Write', 'Edit', 'Glob', 'Grep', 'NotebookEdit'):
    fp = inp.get('file_path') or inp.get('path') or inp.get('notebook_path') or ''
    if fp and fp.startswith('/') and not fp.startswith(allowed):
        denied(f'Access denied: {fp} is outside the project directory')

elif tool == 'Bash':
    cmd = inp.get('command', '')
    paths = re.findall(r'/Users/mercedesreibe/[^\s"\';\|&><]+', cmd)
    bad = [p for p in paths if not p.startswith(allowed)]
    if bad:
        denied(f'Access denied: command references paths outside project directory: {", ".join(bad)}')

print('{}')
