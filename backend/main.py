from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"msg": "ArogyaMitra offline backend is running!"}


@app.get("/workout")
def workout():
    return {
        "plan": """
DAY 1 – FULL BODY
• Warmup: 3 min jogging in place  
• Squats – 3×15  
• Pushups – 3×10  
• Mountain climbers – 2×30 sec  
• Cooldown: Stretch legs and arms

DAY 2 – CARDIO BURN
• Warmup: Jumping jacks – 2 min  
• High knees – 3×30 sec  
• Plank – 3×20 sec  
• Cooldown: Deep breathing

DAY 3 – CORE & ABS
• Crunches – 3×20  
• Leg raises – 3×12  
• Russian twists – 3×20  
• Cooldown: Relax for 3 min

DAY 4 – REST / LIGHT WALK

DAY 5 – LOWER BODY
• Lunges – 3×12  
• Wall sit – 3×20 sec  
• Calf raises – 3×20  

DAY 6 – UPPER BODY
• Push-ups – 3×10  
• Tricep dips – 3×12  
• Shoulder taps – 3×20  

DAY 7 – YOGA & FLEXIBILITY
• Cat-cow – 2 min  
• Cobra pose – 1 min  
• Child’s pose – 1 min
"""
    }


@app.get("/meal")
def meal():
    return {
        "meal": """
SIMPLE 3-DAY MEAL PLAN (Vegetarian)

DAY 1
• Breakfast: Poha + Tea  
• Lunch: Dal + Rice + Salad  
• Dinner: Roti + Sabzi + Curd  

DAY 2
• Breakfast: Upma  
• Lunch: Rajma + Rice  
• Dinner: Khichdi + Papad  

DAY 3
• Breakfast: Sprouts  
• Lunch: Veg Pulao  
• Dinner: Roti + Paneer Sabzi
"""
    }


@app.get("/coach/{msg}")
def coach(msg: str):
    return {
        "reply": f"""
Thanks for your message! Here's your guidance:

You said: "{msg}"

Tip: Stay consistent! Even 15 minutes of daily movement improves energy and mood.  
Drink 2–3L water today 🌿  
Let's keep going! 💪✨
"""
    }