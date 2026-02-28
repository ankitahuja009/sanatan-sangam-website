import json
import os

langs = ['bn', 'gu', 'kn', 'ml', 'mr', 'or', 'pa', 'te', 'ta']
base_path = r'c:\Users\Ahuja\Desktop\Projects\sanatan-sangam-website\messages'
en_path = os.path.join(base_path, 'en.json')

with open(en_path, 'r', encoding='utf-8') as f:
    en_data = json.load(f)

sections = ['artPage', 'wishPage', 'musicPage', 'upharPage', 'astroPage']

for lang in langs:
    lang_path = os.path.join(base_path, f'{lang}.json')
    if not os.path.exists(lang_path):
        print(f"File not found: {lang_path}")
        continue
    
    with open(lang_path, 'r', encoding='utf-8') as f:
        try:
            # Handle BOM if present
            content = f.read()
            if content.startswith('\ufeff'):
                content = content[1:]
            lang_data = json.loads(content)
        except Exception as e:
            print(f"Error reading {lang}: {e}")
            continue
    
    for section in sections:
        if section in en_data:
            lang_data[section] = en_data[section]
    
    with open(lang_path, 'w', encoding='utf-8') as f:
        json.dump(lang_data, f, ensure_ascii=False, indent=4)
    print(f"Updated {lang}.json")
