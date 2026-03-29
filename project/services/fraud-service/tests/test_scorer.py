from app.services.scorer import score_transaction


def test_low_amount_nfc_is_low_risk():
    assert score_transaction(100, "NFC") < 30


def test_high_amount_sound_is_high_risk():
    assert score_transaction(50000, "SOUND") >= 80
