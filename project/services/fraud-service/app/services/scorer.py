def score_transaction(amount: float, channel: str, velocity_hint: int = 1) -> float:
    base = min(amount / 50000, 1.0)
    channel_risk = {
        "NFC": 0.1,
        "BLE": 0.2,
        "SMS": 0.35,
        "USSD": 0.25,
        "SOUND": 0.4,
    }.get(channel, 0.5)

    velocity_penalty = min(velocity_hint / 20, 0.4)
    return round(min(base * 0.5 + channel_risk + velocity_penalty, 1.0) * 100, 2)
